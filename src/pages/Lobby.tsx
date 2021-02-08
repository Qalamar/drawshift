import { BigHead } from "@bigheads/core";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import RoomIcon from "../assets/icons/RoomIcon";
import Create from "../components/lobby/LobbyCreate";
import {
  Container,
  Content,
  CreateButton,
  Description,
  JoinButton,
  Nickname,
  Page,
  Room,
  Text,
  User,
  Welcome,
} from "../components/lobby/LobbyLayout";
import Login from "../components/lobby/LobbyLogin";
import { auth, avatar, room } from "../store/Store";

const Lobby = () => {
  const [login, setLogin] = useState(false);
  const [create, setCreate] = useState(false);

  const history = useHistory();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [-100, 0],
    });
  }, []);

  const transition = async () => {
    if (auth.isRegistred) {
      await controls.start({
        opacity: [1, 0],
        y: [0, -100],
      });
      history.push(`/lobby/${room.room}`);
    }
  };

  return (
    <motion.div
      animate={controls}
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
    >
      <Login
        show={login}
        handleClose={() => setLogin(false)}
        confirmed={() => transition()}
      />

      <Create
        show={create}
        handleClose={() => setCreate(false)}
        confirmed={() => transition()}
      />

      <Page>
        <Container>
          <Content>
            <User>
              <div className="max-w-xl px-4 mb-6">
                <Welcome>
                  Greetings <Nickname>{avatar.name}!</Nickname>
                </Welcome>
                <Text>
                  <strong>Note:</strong> You might encounter occasional bugs,
                  please reach out to us with details if you face any.
                </Text>
              </div>
              <hr className="mb-6 border-gray-300" />
              <div className="flex">
                <div className="w-32 h-32 -mt-6">
                  {/* <BigHead {...avatar} /> */}
                </div>
                <div className="flex flex-col mt-8">
                  <div className="text-sm font-semibold">Level 01</div>
                  <div className="text-xs text-gray-700">Novice</div>
                </div>
              </div>
            </User>
            <Room>
              <div className="mb-5 font-semibold">Get Started</div>
              <div className="flex justify-center w-full mb-3">
                <CreateButton onClick={() => setCreate(true)}>
                  <div className="flex items-center animate-pulse">
                    <div className="mr-3 font-semibold text-white">
                      Create a room
                    </div>
                    <RoomIcon />
                  </div>
                </CreateButton>
              </div>
              <Description>
                This will generate a room identifier that you can share with
                whom you are playing with.
              </Description>
              <div className="flex items-center w-full mb-5">
                <hr className="flex-1 border-gray-300" />
                <div className="px-3 text-xs text-gray-500 sm:text-sm">or</div>
                <hr className="flex-1 border-gray-300" />
              </div>
              <JoinButton onClick={() => setLogin(true)}>
                Join an existing one
              </JoinButton>
            </Room>
          </Content>
        </Container>
      </Page>
    </motion.div>
  );
};

export default Lobby;
