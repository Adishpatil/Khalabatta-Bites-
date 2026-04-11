# Khalbatta Bites Website

A clean, professional, and mobile-responsive website for Khalbatta Bites - authentic Kolhapuri food products.

## Project Overview

This is a static website built with HTML, CSS, and JavaScript that showcases homemade Kolhapuri food products. Customers can browse products, view pricing, and place orders directly through WhatsApp.

**Design Philosophy:** Professional, realistic, minimal—avoiding trendy or "AI-generated" aesthetics. Clean typography, careful spacing, and a grounded visual approach.

## Features

✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
✅ **Product Management** - Products loaded from JSON for easy updates
✅ **WhatsApp Integration** - Direct order placement with pre-filled messages
✅ **Fast Loading** - Static site, no database or backend needed
✅ **SEO-Friendly** - Proper meta tags and semantic HTML
✅ **Future-Proof** - Easily upgradeable to dynamic website

## Project Structure

```
khalbatta-bites-website/
├── index.html              # Home page
├── about.html              # About & brand story
├── products.html           # Product catalog
├── price-list.html         # Price list table
├── order.html              # Ordering guide
├── contact.html            # Contact information
├── css/
│   └── styles.css          # All styling
├── js/
│   └── script.js           # Interactive functionality
├── data/
│   └── products.json       # Product data
├── images/                 # Product images (placeholder)
├── .gitignore              # Git configuration
└── README.md               # This file
```

## Getting Started

### Local Development

1. **Clone or download the project:**
   ```bash
   git clone <repository-url>
   cd khalbatta-bites-website
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python3 -m http.server 8000
     # Then visit http://localhost:8000
     ```

### Adding Product Images

1. Place product images in the `images/` folder
2. Update the image filenames in `data/products.json`
3. Images will automatically display in product cards

Example product structure:
```json
{
  "id": 1,
  "name": "Product Name",
  "weight": "200g",
  "price": "₹250",
  "image": "product-image.jpg"
}
```

## Deployment

### Option 1: GitHub Pages (Free & Easy)

1. Create a GitHub repository
2. Push your project files to the `main` branch
3. Go to **Settings > Pages**
4. Select **Source: main branch** → Save
5. Your site will be live at `https://yourusername.github.io/khalbatta-bites-website/`

### Option 2: Netlify (Free & Simple)

1. Sign up at [netlify.com](https://netlify.com)
2. Click "New site from Git" or drag and drop your folder
3. Configure build settings (leave blank for static site)
4. Deploy and get a live URL instantly

### Option 3: Own Domain

Use GitHub Pages or Netlify with your custom domain:
1. Update DNS settings with your domain provider
2. Point to GitHub Pages or Netlify nameservers
3. Configure custom domain in platform settings

## Customization Guide

### Update Business Info

Edit `data/products.json` to:
- Add/remove products
- Update prices
- Change product descriptions
- Add product images

### Modify Colors

Edit `:root` variables in `css/styles.css`:
```css
:root {
  --dark-brown: #2C1810;
  --golden-yellow: #D4A574;
  --white: #FAFAF8;
  /* ... */
}
```

### Change Contact Number

Update phone number in:
- `css/styles.css` - WhatsApp links
- All HTML files - Contact sections
- Search for `919767188718` and replace

### Add/Remove Pages

1. Create new HTML file (copy structure from existing pages)
2. Update navigation links in header
3. Add page to `js/script.js` for active link highlighting

## How to Use WhatsApp Integration

## How to Use WhatsApp Integration

The website uses WhatsApp Business for customer communication and order placement.

All order buttons open the official WhatsApp Business account associated with the number below.

**Business Number:** 9197671xxxx

**Format:**
```
https://wa.me/9197671xxxx?text=Message%20text%20here
```

## SEO Optimization

- ✅ Meta descriptions on all pages
- ✅ Semantic HTML structure
- ✅ Open Graph tags (ready to add)
- ✅ Fast loading time
- ✅ Mobile-friendly design
- ✅ Proper heading hierarchy

### To Add Open Graph:

Add to `<head>` of each HTML file:
```html
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="image-url">
<meta property="og:url" content="page-url">
```

## Performance Tips

- **Compress images** before uploading (use [TinyPNG](https://tinypng.com))
- **Minimize CSS/JS** for production
- **Use CDN** for fonts (Google Fonts already used)
- **Enable caching** on hosting platform
- **Monitor load times** with Google PageSpeed Insights

## Accessibility

The website includes:
- Semantic HTML5 elements
- Alt text structure for images
- Proper heading hierarchy
- Keyboard navigation support
- Color contrast compliance

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

These features can be added without rebuilding:

1. **Dynamic Product Management**
   - Connect to backend database
   - Admin panel for product updates

2. **Order Tracking**
   - Database to store orders
   - Customer order history

3. **Payment Integration**
   - Razorpay or PayU integration
   - Online payment processing

4. **Customer Reviews**
   - Rating system
   - Testimonials section

5. **Email Notifications**
   - Order confirmations
   - Delivery updates

6. **Analytics**
   - Google Analytics integration
   - Track visitor behavior

## Maintenance

### Regular Updates

- ✅ Check WhatsApp links are working
- ✅ Update product prices in `products.json`
- ✅ Monitor contact form submissions
- ✅ Update Instagram and social links
- ✅ Review broken image links

### Seasonal Updates

- Add seasonal products
- Update banner messages
- Refresh product images
- Promote special offers

## Security Notes

- ✅ No API keys or passwords in code
- ✅ Static site = no database vulnerabilities
- ✅ WhatsApp links are secure
- ✅ HTTPS enforced on hosting platforms

**Never commit:**
- API keys
- Database credentials
- Sensitive information
- Use `.env` file for future API keys

## Support & Questions

For questions or issues:
1. Check the "How to Order" page for ordering FAQs
2. Message via WhatsApp: 97671xxxx
3. Follow Instagram: @Khalbatta_bite

## License

© 2024 Khalbatta Bites. All rights reserved.

---

**Last Updated:** 2024
**Status:** Production Ready
