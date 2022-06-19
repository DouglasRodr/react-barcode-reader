import styled from "styled-components";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <Layout>
      <Content>
        {props.children}
        <Footer>
          <p>
            <strong>Desenvolvido por: </strong>Douglas Rodrigues
          </p>
        </Footer>
      </Content>
    </Layout>
  );
}

const Layout = styled.div`
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Footer = styled.div`
  background-color: #006bc6;
  width: 100%;
  text-align: center;
  padding: 4px 0px;

  z-index: 2;

  p {
    color: #fff;
    font-size: 12px;
  }
`;
