import './db'; // 서버로 연결
import './models/Video'; // 서버로 연결

import app from './server'

const PORT = 4000;

const handleListening = () => console.log(`server listening on port http://localhost:${PORT} 🎉`)

app.listen(PORT, handleListening) // port number, callback
