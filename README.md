# ConsultPro - Visa Application Portal

ConsultPro is a professional visa application platform that allows users to apply for visas securely. Users must log in to access visa applications and view detailed visa offer cards.

## 🚀 Live Demo
🔗 [ConsultPro Live](https://consultprocom.netlify.app)

🔗 [ConsultPro sever github link](https://github.com/S8374/Training-Consultancy-Server.git)

---

## 📌 Features
- 🔐 **Authentication**: Firebase Authentication (Login required to apply)
- 📄 **Visa Offer Details**: Users can view detailed visa offers
- 🛠 **React & Vite**: Fast and optimized frontend with Vite
- 🎨 **TailwindCSS & DaisyUI**: Modern UI design with responsive styles
- ⚡ **SEO Friendly**: Implemented with `react-helmet-async`
- 🔥 **Fast API Calls**: Uses Axios for efficient API requests
- ☁ **Deployed on Netlify**: Frontend hosting with seamless CI/CD integration

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, DaisyUI, Framer Motion
- **Backend**: Firebase Authentication, Firestore Database
- **API Handling**: Axios, React Query
- **SEO Optimization**: React Helmet Async
- **Deployment**: Netlify (Frontend), Vercel (Backend)

---

## 🏗️ Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/yourusername/consultpro.git
cd consultpro
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and add the following:
```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
VITE_IMAGE_BB_API=your_image_bb_api
VITE_LIVE_LINK=your_live_api_link
```

### 4️⃣ Start Development Server
```sh
npm run dev
```

This will start the project at `http://localhost:5173`.

---

## 🌐 SEO Optimization with `react-helmet-async`

To improve SEO and meta tags, we use `react-helmet-async`. Example usage:
```jsx
import { Helmet } from "react-helmet-async";

const VisaOffer = () => {
  return (
    <>
      <Helmet>
        <title>Visa Offer | ConsultPro</title>
        <meta name="description" content="Apply for your visa with ConsultPro" />
      </Helmet>
      <h1>Visa Offer Details</h1>
    </>
  );
};
export default VisaOffer;
```

---

## 📡 API Calls with Axios

We use Axios to fetch data from our backend:
```js
import axios from 'axios';

const fetchVisaOffers = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_LIVE_LINK}/visa-offers`);
    return response.data;
  } catch (error) {
    console.error("Error fetching visa offers", error);
  }
};
```

---

## 🚀 Deploy to Netlify

### 1️⃣ Install Netlify CLI (if not installed)
```sh
npm install -g netlify-cli
```

### 2️⃣ Login to Netlify
```sh
netlify login
```

### 3️⃣ Deploy the site
```sh
netlify deploy --prod
```

After deployment, Netlify will provide a live URL for your project.


---

## 💬 Support & Contact
For issues, feel free to create an issue on GitHub or contact us at **sabbirmridha880@gmail.com**.

