# Pentagon Esports Website 🎮

A minimalistic and modern website for the Pentagon esports team, built with clean HTML, CSS, and JavaScript.

## 🚀 Features

- **Modern Design**: Clean, minimalistic esports-themed design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth scrolling, hover effects, and dynamic animations
- **Pentagon Theme**: Custom pentagon-shaped animations and esports color scheme
- **Team Showcase**: Dedicated section for team member profiles
- **Match History**: Display of recent matches and results
- **Achievements**: Showcase of team accomplishments and trophies
- **Contact Information**: Easy ways to get in touch with the team

## 📁 Project Structure

```
pentagon-esports-website/
├── index.html          # Main website file
├── css/
│   └── style.css      # All styling and animations
├── js/
│   └── main.js        # Interactive functionality
├── assets/            # Static assets (future use)
├── images/            # Team photos and graphics (future use)
├── server.py          # Python development server
└── README.md          # This file
```

## 🛠️ Setup & Development

### Prerequisites

- Python 3.6 or higher (for local development server)
- Modern web browser
- Text editor or IDE

### Quick Start

1. **Clone or download the project**
   ```bash
   # If you have git installed
   git clone <repository-url>
   cd pentagon-esports-website
   
   # Or simply download and extract the ZIP file
   ```

2. **Start the development server**
   ```bash
   python server.py
   ```
   
   The website will automatically open in your browser at `http://localhost:8000`

### Development Server Options

The included Python server supports several options:

```bash
# Start on default port (8000)
python server.py

# Start on specific port
python server.py -p 3000

# Start without opening browser
python server.py --no-browser

# Allow access from other devices on network
python server.py --host 0.0.0.0

# Get help
python server.py --help
```

## 🎨 Customization

### Colors

The website uses a custom esports color scheme:
- **Primary Green**: `#00ff88` - Used for highlights and accents
- **Blue**: `#0066ff` - Secondary accent color
- **Pink/Red**: `#ff0066` - Accent color for gradients
- **Dark Background**: `#0a0a0a` to `#16213e` gradient

### Fonts

- **Headers**: Orbitron (futuristic, gaming font)
- **Body Text**: Roboto (clean, readable)

### Team Information

To customize the team information, edit the following sections in `index.html`:

1. **Team Members** (lines 59-98):
   - Update player names, roles, and games
   - Replace placeholder avatars with actual photos

2. **Match History** (lines 108-143):
   - Update match dates, scores, and opponent names
   - Add or remove match cards as needed

3. **Achievements** (lines 153-167):
   - Update achievement titles and descriptions
   - Change emoji icons to match your accomplishments

4. **Contact Information** (lines 181-192):
   - Update email addresses and social media links
   - Add or remove contact methods

## 🌐 Deployment

### Static Hosting (Recommended)

This website is perfect for static hosting services:

- **Netlify**: Drag and drop the entire folder
- **Vercel**: Connect your git repository
- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Firebase Hosting**: Use Firebase CLI to deploy

### Traditional Web Hosting

Upload all files to your web hosting provider's public folder (usually `public_html` or `www`).

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer 11+ (limited support)

## 🚀 Performance Features

- **Optimized CSS**: Minimal and efficient styling
- **Smooth Animations**: Hardware-accelerated CSS animations
- **Responsive Images**: Placeholder system ready for optimization
- **Fast Loading**: Minimal dependencies, Google Fonts loaded efficiently

## 🔧 Technical Details

### Dependencies

- **Google Fonts**: Orbitron and Roboto font families
- **No JavaScript Frameworks**: Pure vanilla JavaScript for maximum performance
- **CSS Grid & Flexbox**: Modern layout techniques for responsive design

### Key Features Implementation

- **Pentagon Shape**: CSS clip-path with rotation animation
- **Particle Effects**: JavaScript-generated floating particles
- **Smooth Scrolling**: Native CSS smooth-behavior with JavaScript fallback
- **Intersection Observer**: Efficient scroll-based animations
- **Mobile Navigation**: Responsive hamburger menu

## 🎮 Esports Integration Ready

The website is designed to be easily integrated with:

- **Match APIs**: Ready to connect to tournament APIs
- **Stream Integration**: Placeholder for Twitch/YouTube embeds
- **Social Media**: Links ready for Twitter, Instagram, Discord
- **Sponsor Logos**: Asset folder prepared for sponsor graphics

## 📈 SEO Optimized

- Semantic HTML structure
- Meta tags for social media sharing
- Optimized page titles and descriptions
- Alt text ready for images
- Clean URL structure

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source. Feel free to use it as a template for your own esports team website.

## 🆘 Support

If you need help with customization or encounter any issues:

1. Check the browser console for error messages
2. Ensure all files are in the correct directory structure
3. Verify Python is installed for the development server
4. Test in different browsers

## 🎯 Future Enhancements

Potential features to add:
- [ ] Content Management System (CMS) integration
- [ ] Live match score integration
- [ ] Team statistics dashboard
- [ ] Fan gallery and testimonials
- [ ] Merchandise store integration
- [ ] Blog/news section
- [ ] Event calendar
- [ ] Player streaming schedules

---

**Built with ❤️ for competitive gaming**

*Pentagon Esports - Elite Gaming. Unmatched Precision. Victory Defined.*