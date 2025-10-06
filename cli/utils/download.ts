import https from 'https';
import { ComponentInfo } from '../registry';

export async function downloadComponent(component: ComponentInfo, registry: string): Promise<string> {
  const url = `${registry}/${component.filePath}`;
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(data);
        } else {
          reject(new Error(`Failed to download component: ${res.statusCode}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}
