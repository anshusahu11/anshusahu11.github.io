"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  User,
  FileText,
  Trophy,
  Users,
  Camera,
  Video,
  Plus,
  Eye,
  Download,
} from "lucide-react"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")

  const personalInfo = {
    name: "Dr. Anshu Sahu",
    title: "Research Associate | Additive Manufacturing Expert",
    description: "Specializing in Laser μ-3D Printing, Shape Memory Alloys, and Advanced Manufacturing Technologies",
    email: "anshusahunov@gmail.com",
    phone: "+91-9450931991",
    location: "IIT Indore, India",
    profileImage: "/professional-researcher-portrait.png",
    dateOfBirth: "November 11, 1992",
    nationality: "Indian",
    languages: ["English", "Hindi"],
    maritalStatus: "Married",
  }

  const researchAreas = [
    "Additive Manufacturing",
    "Shape Memory Alloy",
    "Smart Actuators",
    "Laser Surface Processing",
    "Physical Vapour Deposition",
    "Laser Micro 3D Printing",
    "Numerical Modelling",
    "Laser Assisted Advanced Machining",
  ]

  const workGallery = {
    photos: [
      {
        id: 1,
        title: "Laser μ-3D Printer Setup",
        description: "Custom-built laser decal transfer based micro 3D printer",
        url: "/laser-3d-printer-lab.png",
        category: "Equipment",
      },
      {
        id: 2,
        title: "NiTi Shape Memory Alloy Samples",
        description: "Wire arc additive manufactured NiTi specimens",
        url: "/placeholder-ptqxr.png",
        category: "Materials",
      },
      {
        id: 3,
        title: "Microscopic Analysis",
        description: "SEM images of laser processed surfaces",
        url: "/sem-surface-analysis.png",
        category: "Analysis",
      },
      {
        id: 4,
        title: "Triboelectric Nanogenerator",
        description: "Energy harvesting device prototype",
        url: "/triboelectric-nanogenerator.png",
        category: "Innovation",
      },
    ],
    videos: [
      {
        id: 1,
        title: "Laser 3D Printing Process",
        description: "Time-lapse of micro-scale 3D printing process",
        thumbnail: "/laser-3d-printing.png",
        category: "Process",
      },
      {
        id: 2,
        title: "Shape Memory Alloy Demonstration",
        description: "Temperature-dependent shape recovery demonstration",
        thumbnail: "/shape-memory-alloy-demo.png",
        category: "Materials",
      },
    ],
  }

  const firstAuthorPublications = [
    {
      title:
        "Parametric investigation on Laser-Induced Forward Transfer of ZnO nanostructure on flexible PET sheet for optoelectronic application",
      journal: "Microelectronic Engineering",
      year: "2021",
      doi: "https://doi.org/10.1016/j.mee.2021.111569",
    },
    {
      title: "Investigation on fabrication of NiTi based strain gauge using laser decal transfer based μ-3D printing",
      journal: "Manufacturing Letters",
      year: "2022",
      doi: "https://doi.org/10.1016/j.mfglet.2022.03.001",
    },
    {
      title: "Parametric Investigations on Laser-Induced Forward Transfer Based Micro-3D Printing of NiTi Alloy",
      journal: "Materials and Manufacturing Processes",
      year: "2022",
      doi: "https://doi.org/10.1080/10426914.2022.2072877",
    },
    {
      title:
        "Investigation of Material Ejection in Laser Decal Transfer Based μ-3D Printing of ZnO ceramics with long Pulsed CO₂ laser",
      journal: "International Journal of Advanced Manufacturing Technology",
      year: "2024",
      doi: "https://doi.org/10.1007/s00170-024-14514-7",
    },
  ]

  const achievements = [
    "Top 75 innovation in IINventive 2022 at IIT Delhi for developed Micro 3D printer",
    "Top 125 innovation in IInventive 2024 at IIT Hyderabad for triboelectric based shoe for energy harvesting",
    "Best Paper Award for Laser-Induced Forward Transfer Based Micro-3D Printing of NiTi Alloy in AIMTDR conference 2021",
    "DST: AMT, Government of India fellowship (Nov 2019 - Aug 2021)",
    "MHRD, Govt. of India fellowship for M.Tech at NIT Warangal (2014-2016)",
  ]

  const education = [
    {
      degree: "Doctor of Philosophy",
      field: "Mechanical Engineering",
      institution: "Indian Institute of Technology, Indore",
      period: "Jan 2020 - Oct 2023",
      thesis:
        "Design & Development of Laser Decal Transfer Based μ-3D Printer for Printing Micro Scale structures for MEMS Application",
    },
    {
      degree: "Master of Technology",
      field: "Manufacturing Engineering",
      institution: "National Institute of Technology Warangal",
      period: "2017 - 2019",
      thesis: "Study on effect of Laser-Assisted Machining parameters on surface roughness",
    },
    {
      degree: "Bachelor of Technology",
      field: "Mechanical Engineering",
      institution: "Bundelkhand Institute of Engineering & Technology, Jhansi",
      period: "2012 - 2016",
      thesis: "Study of Wheel Loading Phenomenon in Surface Grinding Process",
    },
  ]

  const experience = [
    {
      position: "Research Associate",
      institution: "Indian Institute of Technology Indore",
      period: "Sep 2024 - Onwards",
      focus: "WAAM of NiTi-Cu based Shape Memory Alloy for temperature dependent clamps",
    },
    {
      position: "Research Associate",
      institution: "Indian Institute of Technology Indore",
      period: "Sep 2023 - Aug 2024",
      focus: "Laser surface texturing for triboelectric Nanogenerator",
    },
    {
      position: "Senior Research Fellow",
      institution: "Indian Institute of Technology Indore",
      period: "Oct 2022 - Sep 2023",
      focus: "Research in Laser μ-3D Printing",
    },
    {
      position: "Junior Research Fellow",
      institution: "Indian Institute of Technology Indore",
      period: "Jan 2020 - Oct 2022",
      focus: "Research in Laser μ-3D Printing",
    },
    {
      position: "Research Intern",
      institution: "Raja Ramanna Centre for Advanced Technology",
      period: "May 2018 - April 2019",
      focus: "Laser Assisted Machining",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="group mb-8">
            <Avatar className="w-48 h-48 mx-auto border-4 border-white shadow-2xl transition-transform duration-300 group-hover:scale-105">
              <AvatarImage src={personalInfo.profileImage || "/placeholder.svg"} alt={personalInfo.name} />
              <AvatarFallback className="text-4xl font-bold bg-orange-500">AS</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90 font-medium">{personalInfo.title}</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80 leading-relaxed">{personalInfo.description}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Mail className="w-4 h-4" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Phone className="w-4 h-4" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-9 mb-8 bg-white shadow-lg border">
            <TabsTrigger
              value="about"
              className="flex items-center gap-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">About</span>
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="flex items-center gap-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="flex items-center gap-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger
              value="research"
              className="flex items-center gap-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Research</span>
            </TabsTrigger>
            <TabsTrigger
              value="publications"
              className="flex items-center gap-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Publications</span>
            </TabsTrigger>
            <TabsTrigger
              value="gallery"
              className="flex items-center gap-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              <Camera className="w-4 h-4" />
              <span className="hidden sm:inline">Gallery</span>
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="flex items-center gap-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              <Trophy className="w-4 h-4" />
              <span className="hidden sm:inline">Awards</span>
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="flex items-center gap-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              <Award className="w-4 h-4" />
              <span className="hidden sm:inline">Skills</span>
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="flex items-center gap-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <User className="w-6 h-6 text-orange-500" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  I am a dedicated researcher with extensive experience in additive manufacturing, laser processing
                  technologies, and shape memory alloys. Currently serving as a Research Associate at IIT Indore, I
                  specialize in developing innovative solutions for micro-scale manufacturing and smart material
                  applications.
                </p>
                <p className="leading-relaxed text-gray-600">
                  My research focuses on the intersection of advanced manufacturing techniques and smart materials,
                  particularly in the development of laser-based micro 3D printing systems and the characterization of
                  NiTi shape memory alloys. I have contributed significantly to the field through numerous publications,
                  patents, and innovative projects that have been recognized at national and international levels.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4 text-orange-700 text-lg">Personal Information</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Date of Birth:</strong> {personalInfo.dateOfBirth}
                      </p>
                      <p>
                        <strong>Nationality:</strong> {personalInfo.nationality}
                      </p>
                      <p>
                        <strong>Languages:</strong> {personalInfo.languages.join(", ")}
                      </p>
                      <p>
                        <strong>Marital Status:</strong> {personalInfo.maritalStatus}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4 text-purple-700 text-lg">Current Position</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Position:</strong> Research Associate
                      </p>
                      <p>
                        <strong>Institution:</strong> IIT Indore
                      </p>
                      <p>
                        <strong>Focus:</strong> WAAM of NiTi-Cu based SMA
                      </p>
                      <p>
                        <strong>Since:</strong> September 2024
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <div className="grid gap-6">
              {/* Photos Section */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Camera className="w-6 h-6 text-purple-500" />
                      Research Photos
                    </CardTitle>
                    <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                      <Plus className="w-4 h-4" />
                      Add Photo
                    </Button>
                  </div>
                  <CardDescription>Visual documentation of research work and equipment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {workGallery.photos.map((photo) => (
                      <div
                        key={photo.id}
                        className="group relative overflow-hidden rounded-lg border hover:shadow-md transition-all duration-300"
                      >
                        <img
                          src={photo.url || "/placeholder.svg"}
                          alt={photo.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h4 className="font-semibold text-sm">{photo.title}</h4>
                            <p className="text-xs opacity-90">{photo.description}</p>
                            <Badge variant="secondary" className="mt-2 text-xs">
                              {photo.category}
                            </Badge>
                          </div>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Videos Section */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Video className="w-6 h-6 text-red-500" />
                      Research Videos
                    </CardTitle>
                    <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                      <Plus className="w-4 h-4" />
                      Add Video
                    </Button>
                  </div>
                  <CardDescription>Process demonstrations and experimental procedures</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {workGallery.videos.map((video) => (
                      <div
                        key={video.id}
                        className="group relative overflow-hidden rounded-lg border hover:shadow-md transition-all duration-300"
                      >
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                            <div className="w-0 h-0 border-l-[8px] border-l-red-500 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
                          <h4 className="font-semibold text-sm">{video.title}</h4>
                          <p className="text-xs opacity-90">{video.description}</p>
                          <Badge variant="secondary" className="mt-1 text-xs">
                            {video.category}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                  Academic Qualifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-8 pb-6 border-l-2 border-blue-200 last:border-l-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-lg font-semibold text-blue-800">{edu.degree}</h3>
                        <p className="text-blue-600 font-medium">{edu.field}</p>
                        <p className="text-gray-700 font-medium">{edu.institution}</p>
                        <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                        <p className="text-sm text-gray-600">
                          <strong>Thesis:</strong> {edu.thesis}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Briefcase className="w-6 h-6 text-green-500" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 pb-6 border-l-2 border-green-200 last:border-l-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-lg font-semibold text-green-800">{exp.position}</h3>
                        <p className="text-green-600 font-medium">{exp.institution}</p>
                        <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                        <p className="text-sm text-gray-600">{exp.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="research" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BookOpen className="w-6 h-6 text-indigo-500" />
                  Research Areas & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {researchAreas.map((area, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="p-3 text-center hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300 cursor-pointer"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
                <Separator className="my-6" />
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-indigo-700">Research Exposure Areas</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        Wire Arc Additive Manufacturing of NiTi Shape Memory Alloy
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        Development of thin film-based Laser micro 3D printing
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        Physical Vapour Deposition (Flash Evaporation, Sputtering, E-beam)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        Additive manufacturing (DED & SLM)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        Laser Assisted machining using fibre laser (2KW)
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        Plasma surface Texturing
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        Triboelectric Nanogenerator
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        Numerical Modelling (Ansys APDL)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        Laser Nitriding of Aluminium Alloys
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        Laser Patterning & Shock Peening
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="publications" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-emerald-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <FileText className="w-6 h-6 text-emerald-500" />
                  Publications & Patents
                </CardTitle>
                <CardDescription>
                  <a
                    href="https://scholar.google.com/citations?hl=en&user=FKe-SsgAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 hover:underline transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Google Scholar Profile
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-600">Patent</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                    <p className="font-medium">IMPLEMENTATION OF LASER DECAL TRANSFER TOWARDS micro-3D PRINTING</p>
                    <p className="text-sm text-gray-600">Status: Published</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-emerald-600">First Author Publications</h3>
                  <div className="space-y-4">
                    {firstAuthorPublications.map((pub, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow duration-300 bg-gradient-to-r from-emerald-50 to-green-50"
                      >
                        <h4 className="font-medium mb-2 text-gray-800">{pub.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>{pub.journal}</strong> ({pub.year})
                        </p>
                        <div className="flex items-center justify-between">
                          <a
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 hover:text-emerald-700 hover:underline text-sm flex items-center gap-1 transition-colors duration-300"
                          >
                            <ExternalLink className="w-3 h-3" />
                            View Publication
                          </a>
                          <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
                            <Download className="w-3 h-3" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold mb-2">Additional Publications</h3>
                  <p className="text-sm text-gray-600">
                    Multiple co-author publications in high-impact journals including Journal of Alloys and Compounds,
                    Journal of Manufacturing Process, Sensors and Actuators A: Physical, and several book chapters and
                    conference proceedings. Full list available on Google Scholar.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  Awards & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200 hover:shadow-md transition-shadow duration-300"
                    >
                      <Award className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-cyan-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-500" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-cyan-700">Analysis Software</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-cyan-100 transition-colors duration-300">
                        Ansys APDL
                      </Badge>
                      <Badge variant="outline" className="hover:bg-cyan-100 transition-colors duration-300">
                        COMSOL Multiphysics
                      </Badge>
                      <Badge variant="outline" className="hover:bg-cyan-100 transition-colors duration-300">
                        Abaqus
                      </Badge>
                      <Badge variant="outline" className="hover:bg-cyan-100 transition-colors duration-300">
                        MATLAB
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-cyan-700">Design Software</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-cyan-100 transition-colors duration-300">
                        AutoCAD
                      </Badge>
                      <Badge variant="outline" className="hover:bg-cyan-100 transition-colors duration-300">
                        Creo-Parametric
                      </Badge>
                      <Badge variant="outline" className="hover:bg-cyan-100 transition-colors duration-300">
                        SolidWorks
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-cyan-700">Programming</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-cyan-100 transition-colors duration-300">
                        Python
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-teal-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    Experimental Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-teal-700">Manufacturing</h4>
                    <p className="text-sm text-gray-600">Micro 3D Printing, Wire Arc Additive Manufacturing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-teal-700">Laser Systems</h4>
                    <p className="text-sm text-gray-600">CO₂ Laser, Nd:YAG ns laser, Continuous Fiber Laser</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-teal-700">Characterization</h4>
                    <p className="text-sm text-gray-600">
                      XRD, SEM, XPS, DSC, Tensile/Fatigue testing, Raman Spectroscopy, AFM
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-teal-700">Thin Films</h4>
                    <p className="text-sm text-gray-600">Sputtering, Flash Evaporation, E-beam Deposition</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-rose-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-rose-500" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg">
                    <Mail className="w-5 h-5 text-rose-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-rose-600 hover:text-rose-700 hover:underline transition-colors duration-300"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-green-600 hover:text-green-700 hover:underline transition-colors duration-300"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">{personalInfo.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-violet-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-violet-500" />
                    References
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm space-y-4">
                    <div className="p-3 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg">
                      <p className="font-semibold text-violet-800">Prof. I. A. Palani</p>
                      <p className="text-gray-600">Professor & Dean R&D, IIT Indore</p>
                      <p className="text-violet-600">palaniia@iiti.ac.in</p>
                      <p className="text-gray-600">+91-9009356097</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                      <p className="font-semibold text-blue-800">Prof. C P Paul</p>
                      <p className="text-gray-600">Dean Students Affairs, HBNI & Head, LAM Lab, RRCAT</p>
                      <p className="text-blue-600">paulcp@rrcat.gov.in</p>
                      <p className="text-gray-600">+91-9425666596</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
                      <p className="font-semibold text-green-800">Dr. Jinoop Arackal Narayanan</p>
                      <p className="text-gray-600">Assistant Professor, Teesside University, UK</p>
                      <p className="text-green-600">J.ArackalNarayanan@tees.ac.uk</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
