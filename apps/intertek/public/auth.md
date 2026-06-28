# auth.md

This site publishes the discovery metadata an agent needs to register against Intertek Group.

## Discover

1. Fetch `/.well-known/oauth-protected-resource`.
2. Fetch `/.well-known/oauth-authorization-server`.
3. Follow the `register_uri` published there.

## Supported registration methods

- `anonymous`
- `service_auth`
- `identity_assertion`

## Supported credential types

- `access_token`
- `identity_assertion`
- `claim_token`

## Flow

1. Use the registration URI to start an agent session.
2. Use the claim URL when a challenge must be redeemed.
3. Use the revocation URL when a credential must be invalidated.
4. Use the access token with the `Authorization: Bearer` header.

