
# 🗓️ 20-Day Roadmap for EyeUX (Session-Based Tracking)  

🔥 **Goal:** Build a working prototype of EyeUX with real-time mouse + eye tracking and AI-powered insights using Azure.  

---

## 📅 **Day 1–2: Initial Setup (Already Done) ✅  
| **Task** | **Assignee** | **Estimated Time** |
|----------|--------------|--------------------|
| Create GitHub repo & set up Scrum | You | ✅ Done |
| Setup Next.js environment | Teammate | ✅ Done |
| Setup Flask environment | You | ✅ Done |
| Connect Flask and Next.js | Both | ✅ Done |

---

## 📅 **Day 3–4: Eye Tracking Setup**  
| **Task** | **Assignee** | **Estimated Time** |
|----------|--------------|--------------------|
| Install and configure WebGazer.js (Eye Tracking) | Teammate | 3 hours |
| Create Flask endpoint to receive eye-tracking data | You | 3 hours |
| Send eye-tracking data from frontend to backend | Teammate | 3 hours |
| Test real-time eye-tracking | Both | 2 hours |

### ✅ Outcome:  
✔️ Eye-tracking data sent to backend  
✔️ Real-time eye-tracking working  

---

## 📅 **Day 5–6: Mouse Tracking Setup**  
| **Task** | **Assignee** | **Estimated Time** |
|----------|--------------|--------------------|
| Create mouse movement/click tracking with JS | Teammate | 4 hours |
| Create Flask endpoint to receive mouse-tracking data | You | 3 hours |
| Test and refine mouse tracking | Both | 3 hours |

### ✅ Outcome:  
✔️ Mouse tracking working  
✔️ Data being sent to backend  

---

## 📅 **Day 7–8: Flask API Integration (Session Handling)**  
| **Task** | **Assignee** | **Estimated Time** |
|----------|--------------|--------------------|
| Create Flask route to receive mouse + eye data | You | 3 hours |
| Generate session IDs for tracking (use UUID) | You | 3 hours |
| Send session-based data from frontend to Flask | Teammate | 3 hours |
| Test session-based tracking | Both | 3 hours |

### ✅ Outcome:  
✔️ Flask handling session-based data  
✔️ Data being passed from frontend → backend  

---

## 📅 **Day 9–10: Azure Cosmos DB Setup**  
| **Task** | **Assignee** | **Estimated Time** |
|----------|--------------|--------------------|
| Setup Azure Cosmos DB | You | 2 hours |
| Create schema for session-based data | You | 3 hours |
| Store session data in Cosmos DB | You | 3 hours |
| Test database connection | Both | 2 hours |

### ✅ Outcome:  
✔️ Cosmos DB setup complete  
✔️ Data stored by session ID  

---

## 📅 **Day 11–12: Data Preprocessing**  
| **Task** | **Assignee** | **Estimated Time** |
|----------|--------------|--------------------|
| Clean mouse + eye-tracking data | You | 3 hours |
| Design preprocessing pipeline for AI model | You | 3 hours |
| Debug and refine data flow | Both | 2 hours |

### ✅ Outcome:  
✔️ Cleaned and structured data  
✔️ Data ready for AI model  

---

## 📅 **Day 13–14: AI Model Development**  
| **Task** | **Assignee** | **Estimated Time** |
|----------|--------------|--------------------|
| Train Azure AI model with session data | You | 4 hours |
| Create ML model to detect session patterns | You | 4 hours |
| Create Flask endpoint to serve AI suggestions | You | 3 hours |

### ✅ Outcome:  
✔️ AI model trained  
✔️ Backend ready to serve AI-generated insights  

---

## 📅 **Day 15–16: Frontend Data Visualization**  
| **Task** | **Assignee** | **Estimated Time** |
|----------|--------------|--------------------|
| Create heatmap using Chart.js/Heatmap.js | Teammate | 4 hours |
| Display mouse + eye tracking in heatmap | Teammate | 4 hours |
| Test and adjust visuals | Both | 3 hours |

### ✅ Outcome:  
✔️ Heatmaps showing user behavior  
✔️ AI-driven feedback reflected in UI  

---

## 📅 **Day 17–18: AI-Generated UX Recommendations**  
| **Task** | **Assignee** | **Estimated Time** |
|----------|--------------|--------------------|
| Fetch AI-generated recommendations from Flask | Teammate | 3 hours |
| Display AI feedback in the UI | Teammate | 3 hours |
| Test and debug end-to-end feedback flow | Both | 3 hours |

### ✅ Outcome:  
✔️ AI recommendations visible in real-time  
✔️ Fully functional tracking-to-feedback pipeline  

---

## 📅 **Day 19–20: Final Testing + Documentation**  
| **Task** | **Assignee** | **Estimated Time** |
|----------|--------------|--------------------|
| Create demo video + final adjustments | Both | 3 hours |
| Write final README and documentation | You | 4 hours |
| Final code cleanup and review | Both | 3 hours |

### ✅ Outcome:  
✔️ Complete working prototype  
✔️ All documentation ready for submission  

---

## 💡 **Azure Integration**  
| **Component** | **Azure Service** | **Purpose** |
|--------------|-------------------|-------------|
| **Data Storage** | Azure Cosmos DB | Store session-based data |
| **AI Model Training** | Azure Machine Learning | Train model on session data |
| **AI Model Serving** | Azure Functions | Serve real-time feedback |
| **NLP Feedback** | Azure OpenAI | Generate intelligent feedback |

---

## 🛠️ **How Everything Works Together**  
1. **Mouse + eye tracking** → Captured in frontend (Next.js)  
2. **Session ID assigned** → Stored in Cosmos DB  
3. **AI model processes session data** → Azure AI generates recommendations  
4. **AI feedback served** → Flask sends feedback to frontend  
5. **Data visualized** → Heatmaps + recommendations shown in UI  

---

## 👥 **Responsibility Overview**  
| **Task** | **Who's Responsible** |
|---------|------------------------|
| **Frontend (Next.js)** | Teammate |
| **Backend (Flask)** | You |
| **Mouse Tracking** | Teammate |
| **Eye Tracking** | Teammate |
| **Session Handling** | You |
| **Data Storage (Azure Cosmos DB)** | You |
| **AI Integration** | You |
| **AI Feedback Display** | Teammate |
| **Final Testing + Debugging** | Both |

---

## ✅ **Expected Outcome by End of Project**  
✔️ Full AI-based UX tracking system  
✔️ Eye + mouse tracking working in sync  
✔️ Real-time heatmaps and AI-driven recommendations  
✔️ Secure session data handling  
✔️ Fully functional and polished demo  

---

🔥 **This roadmap is focused, achievable, and designed for developer insights. Let’s GO!** 😎
