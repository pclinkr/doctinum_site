import SectionHeading from '../SectionHeading';

export default function AwardsSection({ awards }) {
  return (
    <section className="sec rev">
      <SectionHeading label="Recognition" title={<>Awards that reflect<br />our <span className="si">commitment</span></>} style={{ textAlign: 'center', marginBottom: '44px' }} />
      <table className="awards-table">
        <thead><tr><th>Award</th><th>Description</th><th>Year</th></tr></thead>
        <tbody>{awards.map((awardRow) => <tr key={awardRow[0]}><td>{awardRow[0]}</td><td>{awardRow[1]}</td><td>{awardRow[2]}</td></tr>)}</tbody>
      </table>
    </section>
  );
}
