import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const SidebarContainer = styled.div`
  background-color: #ffffff;
  width: 200px;
  padding: 10px 10px;
  box-sizing: border-box;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  background-color: #7950f2;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  padding: 15px 15px;
  border-radius: 10px;
  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  /* identical to box height */
  text-align: center;

  color: #ffffff;
`;

const TabN = styled.div`
  display: flex;
  align-items: center;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  padding: 15px 15px;
  border-radius: 10px;
  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  /* identical to box height */
  text-align: center;
  color: #53545c;
`;

const ContacS = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  padding: 15px 15px;
  border-radius: 10px;
  background: #e8e9ff;
  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  /* identical to box height */
  text-align: center;
  color: #53545c;
`;

export default function Sidebar() {
  return (
    <Container>
      <SidebarContainer>
        <TabN>
          <img src="./home-2.svg" width="100" />
          Dashboard
        </TabN>
        <TabN>
          <img src="./document-text.svg" width="100" />
          Content
        </TabN>
        <Tab>
          <img src="./profile-2user.svg" width="100" />
          Task
        </Tab>

        <TabN>
          <img src="./user-square.svg" width="100" />
          User
        </TabN>
        <TabN>
          <img src="./monitor-mobbile.svg" width="100" />
          App/Web
        </TabN>
        <TabN>
          <img src="./status-up.svg" width="100" />
          Analytics
        </TabN>
        <TabN>
          <img src="./video-square.svg" width="100" />
          Dashboard
        </TabN>
        <TabN>
          <img src="./notification.svg" width="100" />
          Notification
        </TabN>
        <TabN>
          <img src="./youtube.svg" width="100" />
          Subscription
        </TabN>
        <TabN>
          <img src="./Setting.png" width="100" />
          Settings
        </TabN>
        <ContacS>
          <img src="./fi_headphones.svg" width="100" />
          Settings
        </ContacS>
      </SidebarContainer>
    </Container>
  );
}
