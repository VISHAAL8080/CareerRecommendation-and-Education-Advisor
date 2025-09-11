import React from 'react';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background with CSS only */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Static floating particles */}
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{left: '10%', top: '20%', animationDelay: '0s', boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'}} />
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{left: '80%', top: '30%', animationDelay: '1s', boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'}} />
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{left: '30%', top: '70%', animationDelay: '2s', boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'}} />
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{left: '70%', top: '80%', animationDelay: '3s', boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'}} />
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{left: '50%', top: '10%', animationDelay: '4s', boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'}} />
        
        {/* Static gradient orbs */}
        <div className="absolute rounded-full opacity-30 animate-bounce w-8 h-8" style={{left: '15%', top: '40%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)', animationDelay: '0s', animationDuration: '4s'}} />
        <div className="absolute rounded-full opacity-30 animate-bounce w-12 h-12" style={{left: '85%', top: '60%', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%)', animationDelay: '1s', animationDuration: '5s'}} />
        <div className="absolute rounded-full opacity-30 animate-bounce w-6 h-6" style={{left: '25%', top: '25%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)', animationDelay: '2s', animationDuration: '6s'}} />
        <div className="absolute rounded-full opacity-30 animate-bounce w-10 h-10" style={{left: '75%', top: '15%', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%)', animationDelay: '3s', animationDuration: '7s'}} />
        
        {/* Static floating stars */}
        <div className="absolute text-blue-300 opacity-70 animate-ping text-sm" style={{left: '20%', top: '50%', animationDelay: '0s', animationDuration: '3s'}}>✦</div>
        <div className="absolute text-purple-300 opacity-70 animate-ping text-xs" style={{left: '60%', top: '40%', animationDelay: '1s', animationDuration: '4s'}}>✦</div>
        <div className="absolute text-blue-300 opacity-70 animate-ping text-lg" style={{left: '40%', top: '80%', animationDelay: '2s', animationDuration: '2s'}}>✦</div>
        <div className="absolute text-purple-300 opacity-70 animate-ping text-sm" style={{left: '90%', top: '20%', animationDelay: '3s', animationDuration: '5s'}}>✦</div>
        <div className="absolute text-blue-300 opacity-70 animate-ping text-xs" style={{left: '10%', top: '90%', animationDelay: '4s', animationDuration: '3s'}}>✦</div>
        
        {/* Gradient background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 animate-pulse" 
             style={{ animationDuration: '8s' }} />
        
        {/* Moving light beams */}
        <div className="absolute inset-0">
          <div className="absolute w-1 h-full bg-gradient-to-b from-transparent via-blue-200/20 to-transparent animate-pulse"
               style={{ 
                 left: '20%', 
                 animationDelay: '1s',
                 animationDuration: '6s',
                 transform: 'rotate(15deg)'
               }} />
          <div className="absolute w-1 h-full bg-gradient-to-b from-transparent via-purple-200/20 to-transparent animate-pulse"
               style={{ 
                 left: '70%', 
                 animationDelay: '3s',
                 animationDuration: '8s',
                 transform: 'rotate(-10deg)'
               }} />
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        .animated-bg:hover::before {
          content: '';
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          animation: trail-fade 1s ease-out forwards;
        }
        
        @keyframes trail-fade {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.3); }
        }
        
        .floating-particle {
          animation: float-up 15s linear infinite;
        }
        
        @keyframes float-up {
          0% { 
            transform: translateY(100vh) translateX(0px) rotate(0deg); 
            opacity: 0; 
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateY(-100px) translateX(50px) rotate(360deg); 
            opacity: 0; 
          }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes drift {
          0% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(20px) translateY(-10px); }
          50% { transform: translateX(-15px) translateY(-20px); }
          75% { transform: translateX(10px) translateY(-5px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 animated-bg min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
