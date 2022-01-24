import ResultCell from './ResultCell';

function ResultBox() {
    return (
        <div class=" overlay-header result-box">
            <ResultCell id="trade-name" title="Trade Name" />
            <ResultCell id="date-first-admission" title="Date First Admission" />
            <ResultCell id="fuel-description" title="Fuel Description"/>
        </div>
    );
}

export default ResultBox