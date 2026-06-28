import { ROUTES } from './constants/routes';
import { offices, services } from './data/siteContent';

type WebMcpToolInput = Record<string, unknown>;

type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (input: WebMcpToolInput) => unknown | Promise<unknown>;
};

type ModelContext = {
  provideContext?: (context: { tools: WebMcpTool[] }) => unknown;
};

type NavigatorWithModelContext = Navigator & {
  modelContext?: ModelContext;
};

const TOOLKIT = createTools();
let registered = false;

export function registerWebMcpTools() {
  if (registered) {
    return;
  }

  const modelContext = (window.navigator as NavigatorWithModelContext).modelContext;
  if (!modelContext?.provideContext) {
    return;
  }

  modelContext.provideContext({ tools: TOOLKIT });
  registered = true;
}

function createTools(): WebMcpTool[] {
  return [
    {
      name: 'navigate',
      description: 'Navigate to a key page on the Intertek Group site.',
      inputSchema: {
        type: 'object',
        properties: {
          path: {
            type: 'string',
            enum: [ROUTES.HOME, ROUTES.ABOUT, ROUTES.SERVICES, ROUTES.CONTACT],
          },
        },
        required: ['path'],
        additionalProperties: false,
      },
      execute: ({ path }) => {
        if (typeof path !== 'string') {
          throw new TypeError('Expected path to be a string.');
        }

        navigateTo(path);
        return { ok: true, path };
      },
    },
    {
      name: 'open_contact_email',
      description: 'Open the right contact mailbox for a specific office.',
      inputSchema: {
        type: 'object',
        properties: {
          office: {
            type: 'string',
            enum: offices.map((office) => office.label),
          },
        },
        required: ['office'],
        additionalProperties: false,
      },
      execute: ({ office }) => {
        if (typeof office !== 'string') {
          throw new TypeError('Expected office to be a string.');
        }

        const contactOffice = offices.find((item) => item.label === office);
        if (!contactOffice) {
          throw new Error(`Unknown office: ${office}`);
        }

        window.location.href = `mailto:${contactOffice.email}`;
        return { ok: true, email: contactOffice.email };
      },
    },
    {
      name: 'draft_inquiry',
      description: 'Open the contact form and prefill the inquiry fields.',
      inputSchema: {
        type: 'object',
        properties: {
          company: { type: 'string' },
          email: { type: 'string' },
          service: {
            type: 'string',
            enum: [...services.map((service) => service.title), 'Other'],
          },
          location: { type: 'string' },
          message: { type: 'string' },
        },
        required: ['company', 'email', 'service', 'message'],
        additionalProperties: false,
      },
      execute: async (input) => {
        navigateTo(ROUTES.CONTACT);
        await waitForForm();

        setInputValue('company', input.company);
        setInputValue('email', input.email);
        setSelectValue('service', input.service);
        setInputValue('location', input.location ?? '');
        setTextAreaValue('message', input.message);

        document.getElementById('contact-inquiry-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return { ok: true };
      },
    },
  ];
}

function navigateTo(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo(0, 0);
}

async function waitForForm() {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    if (document.getElementById('contact-inquiry-form')) {
      return;
    }

    await new Promise((resolve) => window.setTimeout(resolve, 50));
  }
}

function setInputValue(name: string, value: unknown) {
  if (typeof value !== 'string') {
    return;
  }

  const element = document.querySelector<HTMLInputElement>(`input[name="${name}"]`);
  if (!element) {
    return;
  }

  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
  setter?.call(element, value);
  element.dispatchEvent(new Event('input', { bubbles: true }));
}

function setSelectValue(name: string, value: unknown) {
  if (typeof value !== 'string') {
    return;
  }

  const element = document.querySelector<HTMLSelectElement>(`select[name="${name}"]`);
  if (!element) {
    return;
  }

  const setter = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value')?.set;
  setter?.call(element, value);
  element.dispatchEvent(new Event('change', { bubbles: true }));
}

function setTextAreaValue(name: string, value: unknown) {
  if (typeof value !== 'string') {
    return;
  }

  const element = document.querySelector<HTMLTextAreaElement>(`textarea[name="${name}"]`);
  if (!element) {
    return;
  }

  const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')?.set;
  setter?.call(element, value);
  element.dispatchEvent(new Event('input', { bubbles: true }));
}

