import styles from './styles.module.css'

function CSSModuleComponent() {
  return (
    <div className="css-modules-container">
      <h3>CSS Module Button</h3>
      <button className={styles.button}>Click me!</button>
    </div>
  )
}

export default CSSModuleComponent