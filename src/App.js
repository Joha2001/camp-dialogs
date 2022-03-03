import "./styles.css";
import { useRef, useState, useMemo } from "react";

import Avatar from "avataaars";

import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";

import ConnectElements from "react-connect-elements";

import crowdImage from "./assets/crowd.png";
import crowdImage2 from "./assets/new-crowd.jpg";
import logo from "./assets/app-logo.png";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  TextField,
  Toolbar,
  Typography,
  IconButton,
  InputAdornment,
  CssBaseline
} from "@mui/material";

import { ChatController, MuiChat } from "chat-ui-react";

import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

import Goal from "./Goal";

const drawerWidth = 450;

export default function App() {
  const [testInput, setTestInput] = useState("");
  const { transcript, listening } = useSpeechRecognition();
  const micColor = listening ? "error" : "default";

  const [chatCtl] = useState(() => new ChatController());

  async function sendTestInput() {
    await chatCtl.addMessage({
      type: "text",
      content: `${testInput}`,
      self: true
    });

    await chatCtl.addMessage({
      type: "text",
      content: `You said: ${testInput}`,
      self: false
    });
  }

  useMemo(async () => {
    // Chat content is displayed using ChatController
    await chatCtl.addMessage({
      type: "text",
      content: `Hello, What's your name!`,
      self: true
    });

    await chatCtl.addMessage({
      type: "text",
      content: `Hello, I am AI.`,
      self: false
    });

    // const name = await chatCtl.setActionRequest({ type: "text" });
  }, [chatCtl]);

  const handleTestInput = (event) => {
    setTestInput(event.target.value);
  };

  useMemo(() => {
    setTestInput(transcript);
  }, [transcript]);

  return (
    <div className="App">
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          // elevation={0}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Box
              component="img"
              sx={{
                height: 50,
                m: 1,
                mr: 2
              }}
              alt="logo"
              src={logo}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Camp DIALOGS
            </Typography>
            <Button color="inherit">Web Demo</Button>
            <Button color="inherit">Phone Demo</Button>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            // display: "flex",
            flexGrow: 1,
            // mr: `${drawerWidth}px`,
            bgcolor: "background.default",
            p: 2
          }}
          className="elements"
        >
          <Xwrapper>
            <Toolbar />
            <Box
              sx={{
                m: 5,
                position: "absolute",
                top: "35%",
                textAlign: "center"
              }}
              id="element1"
            >
              <Box
                component="img"
                sx={{
                  height: 120
                }}
                alt="crowd-image"
                src={crowdImage2}
              />
              <Box>
                <Button
                  size="large"
                  variant="contained"
                  color="success"
                  startIcon={<AddIcon />}
                >
                  Add a Goal
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                m: 5,
                minWidth: "15rem",
                position: "absolute",
                top: "5%",
                left: "25%"
              }}
              id="elem2"
            >
              <Box id="element2">
                <Goal intentName="Play a song" />
              </Box>
              <Box id="element3">
                <Goal intentName="Find weather" />
              </Box>
              <Box id="element4">
                <Goal intentName="Give Facts" />
              </Box>
              <Box id="element5">
                <Goal intentName="Play a song" />
              </Box>
            </Box>
            <Box
              sx={{
                m: 5,
                minWidth: "25rem",
                position: "absolute",
                bottom: "2%",
                right: "10%"
              }}
            >
              <Avatar
                style={{ width: "100px", height: "100px", bgColor: "#efefef" }}
                avatarStyle="Circle"
                topType="LongHairMiaWallace"
                accessoriesType="Prescription02"
                hairColor="BrownDark"
                facialHairType="Blank"
                clotheType="Hoodie"
                clotheColor="PastelBlue"
                eyeType="Happy"
                eyebrowType="Default"
                mouthType="Smile"
                skinColor="Light"
              />
            </Box>
            <Xarrow
              start={"element1"}
              end={"element2"}
              // path={"grid"}
              showHead={false}
              color="pink"
            />
            <Xarrow
              start={"element1"}
              end={"element3"}
              // path={"grid"}
              showHead={false}
              color="pink"
            />
            <Xarrow
              start={"element1"}
              end={"element4"}
              // path={"grid"}
              showHead={false}
              color="pink"
            />
            <Xarrow
              start={"element1"}
              end={"element5"}
              // path={"grid"}
              showHead={false}
              color="pink"
            />
          </Xwrapper>
        </Box>
        {/* <ConnectElements
          selector=".elements"
          elements={[{ from: ".element1", to: ".element2" }]}
        /> */}
        <Drawer
          variant="permanent"
          anchor="right"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box"
            }
          }}
        >
          <Toolbar />
          <Box
            sx={{
              maxHeight: 0.25,
              textAlign: "center",
              p: 1,
              backgroundColor: "warning.light"
              // flexGrow: 1
            }}
          >
            <Avatar
              style={{ width: "100px", height: "100px" }}
              avatarStyle="Circle"
              topType="LongHairMiaWallace"
              accessoriesType="Prescription02"
              hairColor="BrownDark"
              facialHairType="Blank"
              clotheType="Hoodie"
              clotheColor="PastelBlue"
              eyeType="Happy"
              eyebrowType="Default"
              mouthType="Smile"
              skinColor="Light"
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Test Your A.I.
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              overflow: "auto",
              "*::-webkit-scrollbar": {
                width: "0.4em"
              },
              "*::-webkit-scrollbar-track": {
                "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
              },
              "*::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0,0,0,.1)",
                outline: "1px solid slategrey"
              }
            }}
          >
            <MuiChat chatController={chatCtl} />
          </Box>
          <Box sx={{ p: 1, display: "flex" }}>
            <TextField
              sx={{ mt: "auto" }}
              // label="Message"
              placeholder="Type Something!"
              multiline
              fullWidth
              maxRows={3}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      color={micColor}
                      onClick={() => {
                        if (listening) SpeechRecognition.stopListening();
                        else {
                          SpeechRecognition.startListening({
                            language: "en-US"
                          });
                        }
                      }}
                    >
                      <MicIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              value={testInput}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  if (testInput) sendTestInput();
                  setTestInput("");
                  e.preventDefault();
                }
              }}
              onChange={handleTestInput}
              // variant="filled"
            />
            <IconButton
              sx={{ p: 2 }}
              onClick={() => {
                if (testInput) {
                  // echo(testInput);
                  sendTestInput();
                  setTestInput("");
                }
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Drawer>
      </Box>
    </div>
  );
}
