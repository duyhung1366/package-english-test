'use client';

import { Box, CircularProgress, Typography } from '@mui/material';

interface CircularScoreProps {
  score: number;
  size?: number;
}

export default function CircularScore({ score, size = 160 }: CircularScoreProps) {
  // Determine color based on score
  const getColor = () => {
    if (score >= 80) return '#16a34a'; // green-600
    if (score >= 60) return '#ca8a04'; // yellow-600
    return '#dc2626'; // red-600
  };

  const color = getColor();

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        margin: '0 auto',
      }}
    >
      {/* Background circle */}
      <CircularProgress
        variant="determinate"
        value={100}
        size={size}
        thickness={4}
        sx={{
          color: '#e5e7eb', // gray-200
          position: 'absolute',
        }}
      />
      
      {/* Progress circle */}
      <CircularProgress
        variant="determinate"
        value={score}
        size={size}
        thickness={4}
        sx={{
          color: color,
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          },
        }}
      />
      
      {/* Score text in center */}
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          // variant="h3"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: color,
            fontSize: '1rem',
          }}
        >
          {score}%
        </Typography>
      </Box>
    </Box>
  );
}

