import { ImageResponse } from 'next/og';
import { site } from '@/content/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${site.name} — AI agents, evals and QA engineering`;

/**
 * Default share card. Rendered at build time.
 *
 * Deliberately plain: system fonts and flat colour, no webfont fetch and no
 * external image, so it cannot fail at build or render a blank card. The mark
 * is redrawn inline because the SVG file is not reachable from here.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#08090D',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <svg width="52" height="52" viewBox="0 0 32 32" fill="none">
            <path
              d="M3.5 26 L9 11.5 L16 20 L23 5 L28.5 21"
              stroke="#7C5CFF"
              strokeWidth="2.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: 38,
              fontWeight: 600,
              color: '#F4F5F7',
              letterSpacing: '-0.03em',
            }}
          >
            devmations
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span
            style={{
              fontSize: 66,
              fontWeight: 600,
              color: '#F4F5F7',
              letterSpacing: '-0.035em',
              lineHeight: 1.1,
            }}
          >
            Ship AI you can actually trust.
          </span>
          <span style={{ fontSize: 27, color: '#A0A5B1', lineHeight: 1.4 }}>
            AI agents, evaluation and QA engineering — plus the products they live inside.
          </span>
        </div>

        <div style={{ display: 'flex', gap: '28px' }}>
          {['AI agents', 'Evals', 'QA agents', 'MCP', 'Automation testing'].map((item) => (
            <span key={item} style={{ fontSize: 21, color: '#6B7280' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
