import { APIResponse, expect, test } from '@playwright/test';
import { HttpStatusCode } from '@_src_api/enums/api-status-code.enum';


test.describe('GET languages tests', async () => {

  test.only('Returns 200 OK for all articles', async ({ request }) => {
    // When
    const response: APIResponse = await request.get('api/comments');
    // Then
    expect(response.status()).toBe(200);
  });
});

test.describe('GET/languages endpoint tests', async () => {
    const languages: string = '/api/languages';

  test('Returns 200 OK for all comments', async ({ request }) => {
    // When
    const response: APIResponse = await request.get(languages);
    // Then
    expect(response.status()).toBe(HttpStatusCode.Ok);
  });
});
