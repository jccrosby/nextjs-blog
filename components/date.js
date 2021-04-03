import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return (
        <time dateTime={dateString}>{format(date, 'M/d/yyyy h:mm aaa')}</time>
    );
}
