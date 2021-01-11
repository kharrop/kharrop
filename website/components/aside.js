export default function Aside() {
  return (
    <div className="sticky top-20 lg:pt-10 lg:border-t lg:border-gray-300 dark:border-gray-800">
      <ul className="mb-8 text-xl leading-9">
        <li>
          <a
            href="https://twitter.com/kellycodeschaos"
            className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Twitter.
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/kharrop"
            className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          >
            CodePen.
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/kellyharrop"
            className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Dribbble.
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kharrop"
            className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          >
            GitHub.
          </a>
        </li>
      </ul>
      <dl className="w-48 text-sm text-gray-600 dark:text-gray-500">
        <dt>
          <h4>Currently</h4>
        </dt>
        <dd>Intuit Design System</dd>
        <dt>
          <h4>Location</h4>
        </dt>
        <dd>Plano, TX (remote)</dd>
      </dl>
      <p className="text-xs">Written, designed, and coded by Kelly Harrop.</p>
    </div>
  )
}
