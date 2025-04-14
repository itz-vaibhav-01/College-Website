import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';

const FaceRecognition = ({ onFaceVerified }) => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const MODEL_URL = '/models'; // Public/models

  useEffect(() => {
    const loadModels = async () => {
      try {
        setLoading(true);
        await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
        await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
        setLoading(false);
        startVideo();
      } catch (error) {
        console.error('Error loading models:', error);
      }
    };

    loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: {} })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error('Error accessing webcam:', err));
  };

  const handleVideoPlay = async () => {
    const labeledDescriptors = []; // For now, no dataset - You can add later for more secure verification

    const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);

    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current)
        .withFaceLandmarks()
        .withFaceDescriptors();

      if (detections.length > 0) {
        console.log('Face Detected');
        onFaceVerified(); // Trigger Verified Event
      }
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Face Verification</h2>
      {loading ? (
        <p>Loading Face Models...</p>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          width="500"
          height="400"
          onPlay={handleVideoPlay}
          className="rounded shadow"
        />
      )}
    </div>
  );
};

export default FaceRecognition;
