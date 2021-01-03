export default function Aside() {
  return (
    <div className="sticky top-20">
      <ul className="mb-8">
        <li>Twitter</li>
        <li>CodePen</li>
        <li>Dribbble</li>
        <li>GitHub</li>
      </ul>
      <dl className="w-48 text-sm text-gray-600 dark:text-gray-500">
        <dt>
          <h4>Currently</h4>
        </dt>
        <dd>
          Leading the effort to create and integrate design tokens into our
          system.
        </dd>
        <dt>
          <h4>Location</h4>
        </dt>
        <dd>Plano, TX (remote)</dd>
      </dl>
    </div>
  )
}
