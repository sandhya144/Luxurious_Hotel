import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hotel } from '@/data/site';

type ReserveFormProps = {
  compact?: boolean;
};

export default function ReserveForm({ compact = false }: ReserveFormProps) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-brass-line/60 bg-ivory px-8 py-12 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key="thanks"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-display text-2xl font-light text-charcoal"
          >
            Thank you — your request is in.
          </motion.p>
        </AnimatePresence>
        <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
          We will get back to you within a few hours to confirm your dates. For anything
          urgent, call us at{' '}
          <a href={hotel.phoneHref} className="text-brass-deep underline-offset-4 hover:underline">
            {hotel.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-7 text-xs uppercase tracking-wider2 text-brass-deep transition-colors hover:text-charcoal"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <div className={compact ? 'space-y-6' : 'grid gap-6 sm:grid-cols-2'}>
        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-wider2 text-charcoal-soft">
            Name
          </span>
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            className="underline-input"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-wider2 text-charcoal-soft">
            Guests
          </span>
          <input
            required
            type="number"
            name="guests"
            min={1}
            max={10}
            defaultValue={2}
            className="underline-input"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-wider2 text-charcoal-soft">
            Check-in
          </span>
          <input required type="date" name="checkin" className="underline-input" />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-wider2 text-charcoal-soft">
            Check-out
          </span>
          <input required type="date" name="checkout" className="underline-input" />
        </label>
      </div>

      {!compact && (
        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-wider2 text-charcoal-soft">
            Message
          </span>
          <textarea
            name="message"
            rows={3}
            placeholder="Tell us a little about your trip — room preference, airport pickup, anything we should know."
            className="underline-input resize-none"
          />
        </label>
      )}

      <button
        type="submit"
        className="w-full border border-brass bg-transparent px-8 py-3.5 text-xs uppercase tracking-wider2 text-brass-deep transition-all duration-300 hover:bg-brass hover:text-ivory sm:w-auto"
      >
        Reserve
      </button>
    </form>
  );
}
