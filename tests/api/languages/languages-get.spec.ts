import { HttpStatusCode } from '@_src_api/enums/api-status-code.enum';
import { APIResponse, expect, test } from '@playwright/test';

test.describe('GET/languages endpoint tests', async () => {
    const languages: string = '/api/languages';

  test('Returns 200 OK for all comments', async ({ request }) => {
    // When
    const response: APIResponse = await request.get(languages);
    // Then
    expect(response.status()).toBe(HttpStatusCode.Ok);
  });
});
