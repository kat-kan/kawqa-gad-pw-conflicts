import { Endpoints } from '@_src_api/enums/api-endpoints.enum';
import { test } from '@playwright/test';

test.describe('HEAD/articles endpoint tests', async () => {
  test.only('Returns 200 OK for all articles', async ({ request }) => {
    // When
    const response: APIResponse = await request.get(Endpoints.ARTICLES);
    // Then
    expect(response.status()).toBe(200);
  });
});
