//componente filho
function FunctionalComponent() {
  // retornando um objeto com jsx
  return (
    <div>
      <h2>Testando componente</h2>
    </div>
  );
}
export default FunctionalComponent;
// todo componente filho que for importado 
// por algum componente pai, 
// deverá ter a exportação ao final
// para que seja um componente 100% funcional