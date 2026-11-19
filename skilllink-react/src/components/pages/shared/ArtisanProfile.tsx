import React from 'react';
import { ARTISANS } from '@/lib/constants';

const ArtisanProfile: React.FC = () => {
  const a = ARTISANS[0];
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold">{a.name}</h3>
      <p className="mt-2">{a.bio}</p>
    </div>
  );
};

export default ArtisanProfile;
