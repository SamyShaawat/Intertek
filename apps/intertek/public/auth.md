# auth.md

You are an agent. This service supports agentic registration: discover -> register -> (claim if needed) -> exchange for an access_token -> call the API -> handle revocation.

## Discover

1. Fetch the protected resource metadata from `/.well-known/oauth-protected-resource`.
2. Use the listed authorization server from `/.well-known/oauth-authorization-server`.

## Register

1. Start with `https://www.intertekgroup.org/agent/identity` when you can assert an identity for a user.
2. Use the claim flow at `https://www.intertekgroup.org/agent/identity/claim` when you only have a user challenge.
3. Use the access token with the `Authorization: Bearer` header.

## Supported registration methods

- anonymous
- service_auth
- identity_assertion

## Supported credential types

- access_token
- identity_assertion
- claim_token

