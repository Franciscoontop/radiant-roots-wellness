import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HealthQuizPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 0,
      question: 'What are your PRIMARY symptoms? (Select all that apply)',
      type: 'multiple',
      options: [
        'Digestive issues (bloating, gas, IBS, constipation, diarrhea)',
        'Fatigue and low energy',
        'Hormone issues (irregular periods, PMS, PCOS, thyroid)',
        'Brain fog and poor concentration',
        'Skin issues (acne, eczema, rosacea)',
        'Mood issues (anxiety, depression, mood swings)',
        'Sleep problems',
        'Weight struggles',
        'Chronic pain or inflammation',
        'Autoimmune condition',
      ],
    },
    {
      id: 1,
      question: 'How long have you been experiencing these symptoms?',
      type: 'single',
      options: [
        'Less than 6 months',
        '6 months to 1 year',
        '1-3 years',
        '3-5 years',
        '5+ years',
      ],
    },
    {
      id: 2,
      question: 'Have you seen doctors about these issues?',
      type: 'single',
      options: [
        'Yes, multiple doctors',
        'Yes, one or two doctors',
        'No, but I want to',
        'No, I prefer natural approaches',
      ],
    },
    {
      id: 3,
      question: 'What were you told by conventional doctors?',
      type: 'multiple',
      options: [
        'Your labs are normal',
        'It\'s just stress',
        'It\'s genetic/you\'ll always have this',
        'Try this medication',
        'Lose weight and exercise more',
        'I haven\'t seen a doctor yet',
      ],
    },
    {
      id: 4,
      question: 'How would you describe your current diet?',
      type: 'single',
      options: [
        'Very healthy - I eat mostly whole foods',
        'Pretty good - I try to eat well most of the time',
        'Average - I eat a mix of healthy and processed foods',
        'Poor - I rely on convenience and processed foods',
        'I\'m not sure what\'s healthy anymore',
      ],
    },
    {
      id: 5,
      question: 'How is your stress level?',
      type: 'single',
      options: [
        'Very high - I feel constantly overwhelmed',
        'High - I have significant stress regularly',
        'Moderate - Some stressful periods',
        'Low - I manage stress well',
        'Very low - My life is generally calm',
      ],
    },
    {
      id: 6,
      question: 'How many hours of sleep do you typically get?',
      type: 'single',
      options: [
        'Less than 5 hours',
        '5-6 hours',
        '6-7 hours',
        '7-8 hours',
        '8+ hours',
      ],
    },
    {
      id: 7,
      question: 'What\'s your biggest health goal right now?',
      type: 'single',
      options: [
        'Fix my digestive issues',
        'Balance my hormones',
        'Get my energy back',
        'Clear my skin',
        'Improve my mood and mental health',
        'Lose weight',
        'Manage my autoimmune condition',
        'Just feel normal again',
      ],
    },
    {
      id: 8,
      question: 'Are you ready to invest time and effort into healing?',
      type: 'single',
      options: [
        'Yes, I\'m fully committed',
        'Yes, but I need guidance and support',
        'I want to be, but I\'m overwhelmed',
        'I\'m just exploring options right now',
      ],
    },
  ];

  const handleAnswer = (option: string) => {
    const question = questions[currentStep];
    
    if (question.type === 'multiple') {
      const currentAnswers = (answers[currentStep] || '').split('|').filter(Boolean);
      if (currentAnswers.includes(option)) {
        setAnswers({
          ...answers,
          [currentStep]: currentAnswers.filter((a) => a !== option).join('|'),
        });
      } else {
        setAnswers({
          ...answers,
          [currentStep]: [...currentAnswers, option].join('|'),
        });
      }
    } else {
      setAnswers({ ...answers, [currentStep]: option });
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getRecommendation = () => {
    const primarySymptoms = (answers[0] || '').split('|');
    const duration = answers[1];
    const goal = answers[7];

    let recommendation = {
      program: 'Free Discovery Call',
      description: 'Start with a free 20-minute call to discuss your symptoms and see if Dr. Amara is the right fit for you.',
      link: '/contact',
    };

    if (primarySymptoms.some((s) => s.includes('Digestive'))) {
      recommendation = {
        program: '3-Month Gut Healing Program',
        description: 'Based on your digestive symptoms, our comprehensive gut healing program could be transformative. Includes testing, personalized protocol, and ongoing support.',
        link: '/programs',
      };
    } else if (primarySymptoms.some((s) => s.includes('Hormone')) || goal?.includes('hormones')) {
      recommendation = {
        program: '3-Month Hormone Reset Program',
        description: 'Your hormone-related symptoms suggest our Hormone Reset Program would be ideal. Includes comprehensive hormone testing and personalized balancing protocol.',
        link: '/programs',
      };
    } else if (duration?.includes('5+') || duration?.includes('3-5')) {
      recommendation = {
        program: '6-Month Whole-Body Transformation',
        description: 'For long-standing chronic issues, our most comprehensive program provides the deep, sustained support you need for lasting change.',
        link: '/programs',
      };
    } else if (goal?.includes('weight') || goal?.includes('energy')) {
      recommendation = {
        program: 'Free Discovery Call + Gut Health Course',
        description: 'Start with a discovery call to identify root causes, and consider our self-paced Gut Health Course for foundational support.',
        link: '/contact',
      };
    }

    return recommendation;
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showResults) {
    const rec = getRecommendation();
    return (
      <div className="pt-20 min-h-screen bg-[#F7F3E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-[#9CAF88] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#4A6741] mb-4">
              Your Personalized Recommendations
            </h1>
            <p className="text-lg text-[#2D3748]/80">
              Based on your answers, here's what we recommend:
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <span className="badge badge-popular mb-4 inline-block">Recommended For You</span>
            <h2 className="text-3xl font-serif font-semibold text-[#4A6741] mb-4">
              {rec.program}
            </h2>
            <p className="text-[#2D3748]/80 mb-8 leading-relaxed">
              {rec.description}
            </p>
            <Link to={rec.link} className="btn-primary inline-block">
              Get Started
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="font-serif font-semibold text-[#4A6741] mb-2">Root-Cause Approach</h3>
              <p className="text-sm text-[#2D3748]/70">We address the underlying causes, not just symptoms.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-serif font-semibold text-[#4A6741] mb-2">Advanced Testing</h3>
              <p className="text-sm text-[#2D3748]/70">Functional labs that reveal what conventional tests miss.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-serif font-semibold text-[#4A6741] mb-2">Personalized Support</h3>
              <p className="text-sm text-[#2D3748]/70">Custom protocols tailored specifically to you.</p>
            </div>
          </div>

          <div className="bg-[#4A6741] text-white rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-white/90 mb-8">
              Book a free 20-minute Discovery Call to discuss your results and create a personalized plan.
            </p>
            <Link to="/contact" className="bg-white text-[#4A6741] px-8 py-4 rounded-full font-semibold hover:bg-[#F7F3E9] transition-colors inline-block">
              Book Free Discovery Call
            </Link>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => {
                setCurrentStep(0);
                setAnswers({});
                setShowResults(false);
              }}
              className="text-[#C1876B] font-medium hover:underline"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentStep];
  const currentAnswers = (answers[currentStep] || '').split('|').filter(Boolean);

  return (
    <div className="pt-20 min-h-screen bg-[#F7F3E9]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-sm text-[#2D3748]/60 mb-2">
            <span>Question {currentStep + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#4A6741] mb-8">
            {question.question}
          </h2>

          <div className="space-y-3 mb-8">
            {question.options.map((option, index) => {
              const isSelected = currentAnswers.includes(option);
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-[#4A6741] text-white'
                      : 'bg-[#F7F3E9] text-[#2D3748] hover:bg-[#D4C5B9]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected
                          ? 'border-white bg-white/20'
                          : 'border-[#4A6741]'
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm md:text-base">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                currentStep === 0
                  ? 'text-[#2D3748]/30 cursor-not-allowed'
                  : 'text-[#4A6741] hover:bg-[#F7F3E9]'
              }`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={currentAnswers.length === 0}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                currentAnswers.length === 0
                  ? 'bg-[#D4C5B9] text-[#2D3748]/50 cursor-not-allowed'
                  : 'btn-primary'
              }`}
            >
              {currentStep === questions.length - 1 ? 'See Results' : 'Next'}
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#2D3748]/60 mb-4">
            Join 300+ clients who have transformed their health with Dr. Amara
          </p>
          <div className="flex justify-center items-center space-x-2">
            <div className="flex text-[#C9A86A]">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-[#4A6741] font-medium">4.9 stars (94 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthQuizPage;
