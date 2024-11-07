## Recipe App Backend 
 
### Installtion 
1. Clone this repository:

   ```bash
   git clone https://github.com/MrSubha420/Full-STACK-RECIPE-APP.git
   cd RecipeAppBackend
   ```

2. Install dependencies
   ```bash
   npm install

   ```
3. Go to the [cloudinary](https://cloudinary.com/users/register_free) register & get your cloudinary name, api key and api secret. 
4. Setup your config file.
- create a new file 📁 at config folder **config.env** , now go the given file and write 
```bash
PORT = 4000
DASHBOARD_URL = http://localhost:5143
MONGO_URI = pase your mongodb uri string. 
CLOUDINARY_CLOUD_NAME = paste your cloud name. 
CLOUDINARY_API_KEY = paste your api key. 
CLOUDINARY_API_SECRET = paste your api secret. 
```

5. Run the app
  ```bash
  npm run dev.
  ```

### folder structure.  
