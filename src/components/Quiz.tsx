import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const questions: QuizQuestion[] = [
  {
    question: "What makes 'Oumuamua unique in the history of astronomy?",
    options: [
      "It was the largest asteroid ever observed",
      "It was the first confirmed interstellar object passing through our solar system",
      "It was the first comet discovered by AI",
      "It contained organic molecules from Earth"
    ],
    correctIndex: 1,
    explanation: "Detected in 2017, 'Oumuamua was the first object ever confirmed to have originated from outside our solar system, identified by its hyperbolic trajectory."
  },
  {
    question: "How did scientists determine that 2I/Borisov came from another star system?",
    options: [
      "Its unusual color",
      "Radio signals detected from it",
      "Its hyperbolic orbit (too fast to be bound by the Sun's gravity)",
      "Chemical analysis of its surface"
    ],
    correctIndex: 2,
    explanation: "Like 'Oumuamua, Borisov's trajectory was hyperbolic, meaning it was traveling too fast to be gravitationally captured by our Sun—a clear sign of interstellar origin."
  },
  {
    question: "Why are interstellar objects important for astrobiology?",
    options: [
      "They might carry life forms between star systems",
      "They could transport organic molecules and water across the galaxy",
      "They prove that aliens exist",
      "They are made entirely of biological material"
    ],
    correctIndex: 1,
    explanation: "Interstellar objects like comets may carry water, amino acids, and other organic compounds, potentially 'seeding' planetary systems with the building blocks of life—a concept called panspermia."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    if (index === questions[currentQuestion].correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setIsComplete(false);
  };

  const q = questions[currentQuestion];

  return (
    <ScrollReveal className="max-w-2xl mx-auto">
      <div className="rounded-2xl border border-border/50 overflow-hidden backdrop-blur-sm card-glow">
        {/* Header */}
        <div className="px-6 py-4 bg-primary/10 border-b border-border/50">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold text-primary">Knowledge Check</h3>
            <span className="text-sm text-muted-foreground font-mono">
              {isComplete ? 'Complete!' : `${currentQuestion + 1} / ${questions.length}`}
            </span>
          </div>
          {/* Progress bar */}
          <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${((isComplete ? questions.length : currentQuestion) / questions.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {isComplete ? (
              <motion.div
                key="complete"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-8"
              >
                <motion.div
                  className="text-6xl mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                >
                  {score === questions.length ? '🌟' : score >= questions.length / 2 ? '🚀' : '🔭'}
                </motion.div>
                <h4 className="text-2xl font-display font-bold text-foreground mb-2">
                  {score === questions.length 
                    ? 'Perfect Score!' 
                    : score >= questions.length / 2 
                    ? 'Great Job!' 
                    : 'Keep Exploring!'}
                </h4>
                <p className="text-muted-foreground mb-6">
                  You got {score} out of {questions.length} questions correct.
                </p>
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try Again
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  {q.question}
                </p>

                <div className="space-y-3">
                  {q.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === q.correctIndex;
                    const showResult = selectedAnswer !== null;

                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={selectedAnswer !== null}
                        className={`w-full p-4 rounded-xl border text-left transition-all duration-300 ${
                          showResult
                            ? isCorrect
                              ? 'border-cosmic-green bg-cosmic-green/10 text-foreground'
                              : isSelected
                              ? 'border-destructive bg-destructive/10 text-foreground'
                              : 'border-border/30 text-muted-foreground'
                            : 'border-border/50 hover:border-primary/50 hover:bg-primary/5 text-foreground'
                        }`}
                        whileHover={selectedAnswer === null ? { scale: 1.01 } : {}}
                        whileTap={selectedAnswer === null ? { scale: 0.99 } : {}}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{option}</span>
                          {showResult && (
                            <span>
                              {isCorrect ? (
                                <CheckCircle2 className="w-5 h-5 text-cosmic-green" />
                              ) : isSelected ? (
                                <XCircle className="w-5 h-5 text-destructive" />
                              ) : null}
                            </span>
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6"
                    >
                      <div className="p-4 rounded-xl bg-muted/50 border border-border/30">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-foreground">Explanation: </span>
                          {q.explanation}
                        </p>
                      </div>
                      
                      <motion.button
                        onClick={handleNext}
                        className="mt-4 w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Quiz;
