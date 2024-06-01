import { APIResponse, expect, test } from '@playwright/test';

test.describe('GET languages tests', async () => {

  test.only('Returns 200 OK for all articles', async ({ request }) => {
    // When
    const response: APIResponse = await request.get('api/comments');
    // Then
    expect(response.status()).toBe(200);
  });
});
