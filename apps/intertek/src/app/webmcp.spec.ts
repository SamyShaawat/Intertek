/** @vitest-environment jsdom */
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { registerWebMcpTools } from './webmcp';

describe('registerWebMcpTools', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    Object.defineProperty(globalThis.navigator, 'modelContext', {
      configurable: true,
      value: undefined,
    });
  });

  it('provides the site tools when WebMCP is available', () => {
    const provideContext = vi.fn();
    Object.defineProperty(globalThis.navigator, 'modelContext', {
      configurable: true,
      value: { provideContext },
    });

    registerWebMcpTools();

    expect(provideContext).toHaveBeenCalledTimes(1);
    expect(provideContext).toHaveBeenCalledWith(
      expect.objectContaining({
        tools: expect.arrayContaining([
          expect.objectContaining({ name: 'navigate' }),
          expect.objectContaining({ name: 'open_contact_email' }),
          expect.objectContaining({ name: 'draft_inquiry' }),
        ]),
      }),
    );
  });
});
