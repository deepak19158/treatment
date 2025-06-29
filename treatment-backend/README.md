### Step 1: Set Up Your Project

1. **Create a new directory for your project**:
   ```bash
   mkdir treatment-app-backend
   cd treatment-app-backend
   ```

2. **Initialize a new Node.js project**:
   ```bash
   npm init -y
   ```

3. **Install necessary packages**:
   ```bash
   npm install express mongoose cors body-parser
   ```

   - `express`: A web framework for Node.js.
   - `mongoose`: An ODM (Object Data Modeling) library for MongoDB and Node.js.
   - `cors`: A middleware to enable Cross-Origin Resource Sharing.
   - `body-parser`: A middleware to parse incoming request bodies.

### Step 2: Create the Server

1. **Create a new file named `server.js`**:
   ```javascript
   // server.js
   const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   const bodyParser = require('body-parser');

   const app = express();
   const PORT = process.env.PORT || 5000;

   // Middleware
   app.use(cors());
   app.use(bodyParser.json());

   // MongoDB connection
   mongoose.connect('mongodb://localhost:27017/treatmentApp', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   })
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.error('MongoDB connection error:', err));

   // Start the server
   app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

### Step 3: Create Models

1. **Create a new directory named `models`**:
   ```bash
   mkdir models
   ```

2. **Create a file named `Booking.js` in the `models` directory**:
   ```javascript
   // models/Booking.js
   const mongoose = require('mongoose');

   const bookingSchema = new mongoose.Schema({
     name: { type: String, required: true },
     phone: { type: String, required: true },
     email: { type: String, required: true },
     address: { type: String, required: true },
     preferredDate: { type: Date, required: true },
     preferredTime: { type: String, required: true },
     category: { type: String, required: true },
     service: { type: String, required: true },
     packageName: { type: String, required: true },
   });

   module.exports = mongoose.model('Booking', bookingSchema);
   ```

3. **Create a file named `Consultation.js` in the `models` directory**:
   ```javascript
   // models/Consultation.js
   const mongoose = require('mongoose');

   const consultationSchema = new mongoose.Schema({
     name: { type: String, required: true },
     phone: { type: String, required: true },
     email: { type: String, required: true },
     preferredDate: { type: Date, required: true },
     preferredTime: { type: String, required: true },
     symptoms: { type: String, required: true },
     treatment: { type: String, required: true },
   });

   module.exports = mongoose.model('Consultation', consultationSchema);
   ```

### Step 4: Create Routes

1. **Create a new directory named `routes`**:
   ```bash
   mkdir routes
   ```

2. **Create a file named `bookings.js` in the `routes` directory**:
   ```javascript
   // routes/bookings.js
   const express = require('express');
   const Booking = require('../models/Booking');

   const router = express.Router();

   // Create a new booking
   router.post('/', async (req, res) => {
     try {
       const booking = new Booking(req.body);
       await booking.save();
       res.status(201).json(booking);
     } catch (error) {
       res.status(400).json({ message: error.message });
     }
   });

   // Get all bookings
   router.get('/', async (req, res) => {
     try {
       const bookings = await Booking.find();
       res.json(bookings);
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
   });

   module.exports = router;
   ```

3. **Create a file named `consultations.js` in the `routes` directory**:
   ```javascript
   // routes/consultations.js
   const express = require('express');
   const Consultation = require('../models/Consultation');

   const router = express.Router();

   // Create a new consultation
   router.post('/', async (req, res) => {
     try {
       const consultation = new Consultation(req.body);
       await consultation.save();
       res.status(201).json(consultation);
     } catch (error) {
       res.status(400).json({ message: error.message });
     }
   });

   // Get all consultations
   router.get('/', async (req, res) => {
     try {
       const consultations = await Consultation.find();
       res.json(consultations);
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
   });

   module.exports = router;
   ```

### Step 5: Integrate Routes into the Server

1. **Update `server.js` to use the routes**:
   ```javascript
   // server.js
   // ... previous code ...

   // Import routes
   const bookingRoutes = require('./routes/bookings');
   const consultationRoutes = require('./routes/consultations');

   // Use routes
   app.use('/api/bookings', bookingRoutes);
   app.use('/api/consultations', consultationRoutes);

   // ... remaining code ...
   ```

### Step 6: Run Your Server

1. **Start your server**:
   ```bash
   node server.js
   ```

2. **Test your API**:
   You can use tools like Postman or Insomnia to test your API endpoints:
   - **POST** `/api/bookings` to create a new booking.
   - **GET** `/api/bookings` to retrieve all bookings.
   - **POST** `/api/consultations` to create a new consultation.
   - **GET** `/api/consultations` to retrieve all consultations.

### Step 7: Connect to MongoDB

Make sure you have MongoDB installed and running on your machine. You can also use a cloud service like MongoDB Atlas if you prefer.

### Conclusion

You now have a basic Node.js backend application using Express that can handle bookings and consultations for your treatment app. You can expand this application by adding more features, such as user authentication, validation, and error handling as needed.