import styles from "./Empty.module.css";

export function Empty() {
return (
<div className={styles.empty}>
    <img className={styles.clipboard} src="src\assets\Clipboard.svg" />
    <h2>
    <strong>Voce ainda não tem tarefas cadastradas</strong>
    </h2>
    <h3>Crie tarefas e organize os seus itens a fazer</h3>
</div>
);
}
