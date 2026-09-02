import {
  Bot,
  Gauge,
  Radar,
  Plug,
  FileCheck,
  FlaskConical,
  LayoutGrid,
  Smartphone,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import type { ServiceIcon as ServiceIconName } from '@/content/services';

/**
 * Resolves a service's icon name to a glyph.
 *
 * The name lives as a string in services.ts so that the content file stays
 * free of component imports and can be consumed by the Markdown export, which
 * runs outside React entirely.
 */
const map = {
  bot: Bot,
  gauge: Gauge,
  radar: Radar,
  plug: Plug,
  fileCheck: FileCheck,
  flaskConical: FlaskConical,
  layoutGrid: LayoutGrid,
  smartphone: Smartphone,
} as const;

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Glyph = map[name];
  return <Glyph className={cn('size-4', className)} aria-hidden="true" />;
}
