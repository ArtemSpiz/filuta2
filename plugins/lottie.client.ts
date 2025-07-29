// Temporarily disabled to debug mounting issue
// import lottie from 'lottie-web';

export default defineNuxtPlugin(() => {
  console.log('Lottie plugin loaded');
  return {
    provide: {
      lottie: null, // Temporarily disabled
    },
  };
});
