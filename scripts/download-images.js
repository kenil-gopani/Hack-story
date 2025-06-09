const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  events: [
    {
      url: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968',
      filename: 'berlin-wall.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2',
      filename: 'moon-landing.jpg'
    },
    {
      url: 'https://cdn.britannica.com/43/120643-004-926C49EB/Illustration-Encyclopaedia-Britannica-printing-press-edition-stick.jpg',
      filename: 'printing-press.jpg'
    },
    {
      url: 'https://cdn.britannica.com/79/222279-138-B1AAFBB0/The-Enigma-Machine-Explained.jpg',
      filename: 'enigma.jpg'
    },
    {
      url: 'https://www.99notes.in/wp-content/uploads/2025/03/industrial-revolution-1024x674.webp',
      filename: 'industrial-revolution.jpg'
    },
    {
      url: 'https://i.ytimg.com/vi/185ncLkpK7A/maxresdefault.jpg',
      filename: 'internet.jpg'
    },
    {
      url: 'https://cdn.britannica.com/10/134310-050-3A8F1B5E/Countess-of-Dufferin-Philadelphia-Baldwin-Locomotive-Works-1877.jpg',
      filename: 'railroad.jpg'
    },
    {
      url: 'https://www.powermag.com/wp-content/uploads/2020/12/fig2-nikola-tesla-exhibit-1893-chicago-world-fair-1024x800.png',
      filename: 'electricity.jpg'
    },
    {
      url: 'https://media.assettype.com/gulfnews%2F2024-11-29%2Frifbz2iw%2FPhone_history_1756625087b_original_ratio.jpg',
      filename: 'telephone.jpg'
    },
    {
      url: 'https://indianmediastudies.com/wp-content/uploads/2023/10/Marconi.jpg.webp',
      filename: 'radio.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
      filename: 'television.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
      filename: 'computer.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
      filename: 'space-race.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      filename: 'personal-computer.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      filename: 'world-wide-web.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
      filename: 'smartphone.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
      filename: 'social-media.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      filename: 'artificial-intelligence.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      filename: 'blockchain.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
      filename: 'quantum-computing.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      filename: 'renewable-energy.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      filename: 'genetic-engineering.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
      filename: 'space-exploration.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      filename: 'robotics.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
      filename: 'virtual-reality.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
      filename: 'augmented-reality.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
      filename: '5g.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      filename: 'internet-of-things.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
      filename: 'cloud-computing.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
      filename: 'big-data.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      filename: 'machine-learning.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      filename: 'cybersecurity.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      filename: 'digital-currency.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
      filename: 'smart-cities.jpg'
    }
  ],
  team: [
    {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      filename: 'alex.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      filename: 'sarah.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      filename: 'marcus.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      filename: 'priya.jpg'
    },
    {
      url: 'https://ui-avatars.com/api/?name=Kenil+Gopani&background=10B981&color=fff&size=512',
      filename: 'kenil.jpg'
    }
  ]
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filepath);
        response.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}`));
      }
    }).on('error', reject);
  });
};

const createDirectories = () => {
  const dirs = [
    path.join(__dirname, '../public/images'),
    path.join(__dirname, '../public/images/events'),
    path.join(__dirname, '../public/images/team')
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

const main = async () => {
  try {
    createDirectories();

    // Download event images
    for (const image of images.events) {
      const filepath = path.join(__dirname, '../public/images/events', image.filename);
      await downloadImage(image.url, filepath);
      console.log(`Downloaded ${image.filename}`);
    }

    // Download team images
    for (const image of images.team) {
      const filepath = path.join(__dirname, '../public/images/team', image.filename);
      await downloadImage(image.url, filepath);
      console.log(`Downloaded ${image.filename}`);
    }

    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

main(); 