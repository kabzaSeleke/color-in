// ============================================================
// DATA - Mining / Engineering / Construction Industry (South Africa)
// ============================================================
let suppliers = [
  {id:'SUP-001',name:'Atlas Copco SA (Pty) Ltd',category:'Mining Equipment',contact:'Riaan Botha',email:'r.botha@atlascopco.co.za',phone:'+27 11 821 9000',lead:21,ytdSpend:1240000,totalPOs:14,status:'Active',terms:'Net 30'},
  {id:'SUP-002',name:'Macsteel Service Centres SA',category:'Steel & Metals',contact:'Thembi Dlamini',email:'t.dlamini@macsteel.co.za',phone:'+27 11 871 0000',lead:10,ytdSpend:842000,totalPOs:22,status:'Active',terms:'Net 30'},
  {id:'SUP-003',name:'Renttech South Africa',category:'Mining Equipment',contact:'Johan van der Berg',email:'j.vdberg@renttech.co.za',phone:'+27 11 235 1600',lead:7,ytdSpend:386000,totalPOs:9,status:'Active',terms:'Net 60'},
  {id:'SUP-004',name:'MSA Africa Safety',category:'Safety & PPE',contact:'Nomvula Khumalo',email:'n.khumalo@msanet.com',phone:'+27 11 610 2400',lead:5,ytdSpend:218000,totalPOs:18,status:'Active',terms:'Net 30'},
  {id:'SUP-005',name:'AfriSam (Pty) Ltd',category:'Civil Materials',contact:'Kobus Meyer',email:'k.meyer@afrisam.co.za',phone:'+27 11 670 5500',lead:3,ytdSpend:674000,totalPOs:31,status:'Active',terms:'COD'},
  {id:'SUP-006',name:'ABB South Africa',category:'Electrical',contact:'Sipho Ndlovu',email:'s.ndlovu@za.abb.com',phone:'+27 10 202 5000',lead:14,ytdSpend:496000,totalPOs:11,status:'Active',terms:'Net 30'},
  {id:'SUP-007',name:'Protea Chemicals',category:'Chemicals',contact:'Anette Venter',email:'a.venter@proteachem.co.za',phone:'+27 11 316 3200',lead:7,ytdSpend:312000,totalPOs:16,status:'Active',terms:'Net 30'},
  {id:'SUP-008',name:'Bulldog Projects (Pty) Ltd',category:'Tools & Hardware',contact:'Grant Hendricks',email:'g.hendricks@bulldogprojects.co.za',phone:'+27 83 700 1234',lead:4,ytdSpend:182000,totalPOs:27,status:'Active',terms:'COD'},
  {id:'SUP-009',name:'Sandvik Mining & Rock Solutions',category:'Mining Equipment',contact:'Pierre Joubert',email:'p.joubert@sandvik.com',phone:'+27 11 570 9400',lead:28,ytdSpend:1680000,totalPOs:8,status:'Active',terms:'Net 60'},
  {id:'SUP-010',name:'Murray & Roberts Cementation',category:'Civil Materials',contact:'Lerato Mokoena',email:'l.mokoena@murrob.com',phone:'+27 11 456 0000',lead:14,ytdSpend:920000,totalPOs:6,status:'Active',terms:'Net 30'},
  {id:'SUP-011',name:'Voltex (Pty) Ltd',category:'Electrical',contact:'Willem Eksteen',email:'w.eksteen@voltex.co.za',phone:'+27 11 564 8300',lead:5,ytdSpend:268000,totalPOs:19,status:'Active',terms:'Net 30'},
  {id:'SUP-012',name:'DRD Safety & Welding Supplies',category:'Safety & PPE',contact:'Fatima Jacobs',email:'f.jacobs@drdsafety.co.za',phone:'+27 21 555 8400',lead:4,ytdSpend:144000,totalPOs:14,status:'On Hold',terms:'COD'},
];

let products = [
  {id:'PRD-001',sku:'MC-DB-095',name:'Tungsten Carbide Drill Bit 95mm',category:'Mining Equipment',supplier:'Atlas Copco SA (Pty) Ltd',price:2840,unit:'Each',stock:120,reorder:20,status:'Active'},
  {id:'PRD-002',sku:'MC-DB-115',name:'Tungsten Carbide Drill Bit 115mm',category:'Mining Equipment',supplier:'Atlas Copco SA (Pty) Ltd',price:3650,unit:'Each',stock:84,reorder:20,status:'Active'},
  {id:'PRD-003',sku:'SS-IPE-200',name:'IPE 200 Structural Steel Beam',category:'Steel & Structural',supplier:'Macsteel Service Centres SA',price:1840,unit:'m',stock:340,reorder:50,status:'Active'},
  {id:'PRD-004',sku:'SS-PLT-10',name:'Mild Steel Plate 10mm',category:'Steel & Structural',supplier:'Macsteel Service Centres SA',price:620,unit:'m2',stock:280,reorder:40,status:'Active'},
  {id:'PRD-005',sku:'PPE-HH-3M',name:'3M Full Brim Hard Hat Class E',category:'Safety & PPE',supplier:'MSA Africa Safety',price:285,unit:'Each',stock:450,reorder:100,status:'Active'},
  {id:'PRD-006',sku:'PPE-HRN-MSA',name:'MSA V-Gard Safety Harness',category:'Safety & PPE',supplier:'MSA Africa Safety',price:1640,unit:'Each',stock:90,reorder:20,status:'Active'},
  {id:'PRD-007',sku:'CM-CEM-42',name:'AfriSam Surebuild Cement 42.5N 50kg',category:'Civil Materials',supplier:'AfriSam (Pty) Ltd',price:148,unit:'Each',stock:1800,reorder:300,status:'Active'},
  {id:'PRD-008',sku:'CM-REBAR-16',name:'Y16 Reinforcing Bar 12m',category:'Civil Materials',supplier:'Murray & Roberts Cementation',price:320,unit:'Each',stock:640,reorder:100,status:'Active'},
  {id:'PRD-009',sku:'CM-REBAR-20',name:'Y20 Reinforcing Bar 12m',category:'Civil Materials',supplier:'Murray & Roberts Cementation',price:480,unit:'Each',stock:420,reorder:80,status:'Active'},
  {id:'PRD-010',sku:'EL-CB-ABB',name:'ABB SACE 250A Circuit Breaker',category:'Electrical',supplier:'ABB South Africa',price:3200,unit:'Each',stock:48,reorder:10,status:'Active'},
  {id:'PRD-011',sku:'EL-CAB-16',name:'16mm2 4-core PVC Armoured Cable 50m',category:'Electrical',supplier:'Voltex (Pty) Ltd',price:4800,unit:'Each',stock:36,reorder:8,status:'Active'},
  {id:'PRD-012',sku:'CH-XAN-200',name:'Xanthate Collector 200L drum',category:'Chemicals & Reagents',supplier:'Protea Chemicals',price:8400,unit:'Each',stock:24,reorder:4,status:'Active'},
  {id:'PRD-013',sku:'CH-CYN-50',name:'Sodium Cyanide Solution 50kg',category:'Chemicals & Reagents',supplier:'Protea Chemicals',price:6200,unit:'Each',stock:18,reorder:4,status:'Active'},
  {id:'PRD-014',sku:'TH-ANG-9',name:'Makita 230mm Angle Grinder 2000W',category:'Tools & Hardware',supplier:'Bulldog Projects (Pty) Ltd',price:2840,unit:'Each',stock:22,reorder:5,status:'Active'},
  {id:'PRD-015',sku:'MC-SC-SAND',name:'Sandvik LH514 Load-Haul-Dump Unit',category:'Mining Equipment',supplier:'Sandvik Mining & Rock Solutions',price:4850000,unit:'Each',stock:2,reorder:1,status:'Active'},
  {id:'PRD-016',sku:'SS-SHS-100',name:'Square Hollow Section 100x100x5',category:'Steel & Structural',supplier:'Macsteel Service Centres SA',price:480,unit:'m',stock:560,reorder:80,status:'Active'},
  {id:'PRD-017',sku:'PPE-N95-BOX',name:'N95 Dust Respirator Half Mask (box/20)',category:'Safety & PPE',supplier:'MSA Africa Safety',price:820,unit:'Box',stock:200,reorder:50,status:'Active'},
  {id:'PRD-018',sku:'TH-GRD-B7',name:'B7 Threaded Rod Set M20x1000mm',category:'Tools & Hardware',supplier:'Bulldog Projects (Pty) Ltd',price:128,unit:'Set',stock:380,reorder:60,status:'Active'},
  {id:'PRD-019',sku:'EL-VFD-ABB',name:'ABB ACS880 Variable Speed Drive 75kW',category:'Electrical',supplier:'ABB South Africa',price:48000,unit:'Each',stock:6,reorder:2,status:'Active'},
  {id:'PRD-020',sku:'MC-DRL-ATLAS',name:'Atlas Copco Simba E7 Drill Rig',category:'Mining Equipment',supplier:'Atlas Copco SA (Pty) Ltd',price:12400000,unit:'Each',stock:1,reorder:1,status:'Active'},
];

let services = [
  {id:'SVC-001',code:'ENG-WLD-001',name:'Structural Welding & Fabrication',category:'Engineering',rateType:'Hourly',rate:680,unit:'Hour',lead:'2 days',status:'Active'},
  {id:'SVC-002',code:'ENG-DES-001',name:'Structural Steel Design & Drafting',category:'Engineering',rateType:'Daily',rate:8400,unit:'Day',lead:'5 days',status:'Active'},
  {id:'SVC-003',code:'ENG-CIV-001',name:'Civil Engineering & Foundation Design',category:'Engineering',rateType:'Fixed',rate:85000,unit:'Project',lead:'10 days',status:'Active'},
  {id:'SVC-004',code:'MIN-DRL-001',name:'Underground Drilling Operations',category:'Mining Operations',rateType:'Per Tonne',rate:48,unit:'Tonne',lead:'1 day',status:'Active'},
  {id:'SVC-005',code:'MIN-BLS-001',name:'Blasting & Explosives Handling',category:'Mining Operations',rateType:'Fixed',rate:42000,unit:'Blast',lead:'3 days',status:'Active'},
  {id:'SVC-006',code:'MIN-VNT-001',name:'Underground Ventilation Assessment',category:'Mining Operations',rateType:'Daily',rate:12000,unit:'Day',lead:'5 days',status:'Active'},
  {id:'SVC-007',code:'CON-CON-001',name:'Concrete Pouring & Finishing',category:'Construction',rateType:'Per m2',rate:380,unit:'m2',lead:'1 day',status:'Active'},
  {id:'SVC-008',code:'CON-SCF-001',name:'Scaffolding Erection & Dismantling',category:'Construction',rateType:'Per m2',rate:180,unit:'m2',lead:'2 days',status:'Active'},
  {id:'SVC-009',code:'CON-EXC-001',name:'Bulk Earthworks & Excavation',category:'Construction',rateType:'Per m3',rate:220,unit:'m3',lead:'3 days',status:'Active'},
  {id:'SVC-010',code:'INS-NDT-001',name:'Non-Destructive Testing (NDT/UT)',category:'Inspections & Testing',rateType:'Hourly',rate:920,unit:'Hour',lead:'3 days',status:'Active'},
  {id:'SVC-011',code:'INS-ELT-001',name:'Electrical Testing & Commissioning',category:'Inspections & Testing',rateType:'Daily',rate:9600,unit:'Day',lead:'2 days',status:'Active'},
  {id:'SVC-012',code:'INS-ENV-001',name:'Environmental Impact Assessment',category:'Inspections & Testing',rateType:'Fixed',rate:65000,unit:'Report',lead:'21 days',status:'Active'},
  {id:'SVC-013',code:'MNT-MCH-001',name:'Heavy Equipment Preventive Maintenance',category:'Maintenance',rateType:'Hourly',rate:1200,unit:'Hour',lead:'1 day',status:'Active'},
  {id:'SVC-014',code:'MNT-ELC-001',name:'Electrical Maintenance & Fault Finding',category:'Maintenance',rateType:'Hourly',rate:760,unit:'Hour',lead:'1 day',status:'Active'},
  {id:'SVC-015',code:'CON-RET-001',name:'Technical Consulting Retainer',category:'Consulting',rateType:'Monthly Retainer',rate:48000,unit:'Month',lead:'Immediate',status:'Active'},
  {id:'SVC-016',code:'CON-PMG-001',name:'Project Management – Capital Projects',category:'Consulting',rateType:'Daily',rate:14000,unit:'Day',lead:'5 days',status:'Active'},
];

let customers = [
  {id:'C-0012',name:'Kumba Iron Ore Ltd',segment:'Mining',contact:'Gerhard Fourie',email:'g.fourie@kumba.co.za',credit:2000000,balance:284600,status:'Active'},
  {id:'C-0018',name:'Exxaro Resources Ltd',segment:'Mining',contact:'Zanele Mokoena',email:'z.mokoena@exxaro.com',credit:1800000,balance:168400,status:'Active'},
  {id:'C-0024',name:'Murray & Roberts Projects',segment:'Engineering',contact:'Alan Pietersen',email:'a.pietersen@murrob.com',credit:1500000,balance:92400,status:'Active'},
  {id:'C-0031',name:'WBHO Construction (Pty) Ltd',segment:'Construction',contact:'Hendrik du Preez',email:'h.dupreez@wbho.co.za',credit:2500000,balance:412000,status:'Active'},
  {id:'C-0037',name:'Aveng Moolmans Mining',segment:'Mining',contact:'Thandeka Nzimande',email:'t.nzimande@moolmans.co.za',credit:1200000,balance:76800,status:'Active'},
  {id:'C-0042',name:'Concor Holdings Ltd',segment:'Construction',contact:'Pieter Smit',email:'p.smit@concor.co.za',credit:900000,balance:38200,status:'Active'},
  {id:'C-0056',name:'Implats Mine Operations',segment:'Mining',contact:'Bongi Mabaso',email:'b.mabaso@implats.co.za',credit:3000000,balance:684000,status:'Active'},
  {id:'C-0061',name:'DRA Global Engineering',segment:'Engineering',contact:'Fiona McBride',email:'f.mcbride@draglobal.com',credit:1100000,balance:124000,status:'Active'},
  {id:'C-0078',name:'Group Five Construction',segment:'Construction',contact:'Sias van Zyl',email:'s.vanzyl@g5.co.za',credit:800000,balance:0,status:'Inactive'},
  {id:'C-0085',name:'Sibanye-Stillwater Mining',segment:'Mining',contact:'Nkosinathi Cele',email:'n.cele@sibanyestillwater.com',credit:4000000,balance:892000,status:'Active'},
  {id:'C-0091',name:'Fluor South Africa',segment:'Engineering',contact:'Patrick Olivier',email:'p.olivier@fluor.com',credit:1400000,balance:218000,status:'Active'},
  {id:'C-0097',name:'PRASA Infrastructure',segment:'Construction',contact:'Lindiwe Dhlamini',email:'l.dhlamini@prasa.com',credit:600000,balance:48600,status:'On Hold'},
];

let invoices = [
  {id:'INV-2026-1001',customer:'Kumba Iron Ore Ltd',issued:'2026-04-01',due:'2026-05-01',amount:384200,paid:384200,status:'Paid',items:'Drill Bits 95mm x50, Ventilation Survey, PPE Bundle'},
  {id:'INV-2026-1002',customer:'Exxaro Resources Ltd',issued:'2026-04-03',due:'2026-05-03',amount:224000,paid:0,status:'Pending',items:'Underground Drilling 4,667t, Safety Harness x20'},
  {id:'INV-2026-1003',customer:'WBHO Construction (Pty) Ltd',issued:'2026-03-15',due:'2026-04-15',amount:612000,paid:306000,status:'Partial',items:'Y16/Y20 Rebar 1,200t, Concrete Pouring 1,600m2'},
  {id:'INV-2026-1004',customer:'Murray & Roberts Projects',issued:'2026-03-20',due:'2026-04-20',amount:138000,paid:0,status:'Overdue',items:'Structural Steel Design, NDT Testing'},
  {id:'INV-2026-1005',customer:'Sibanye-Stillwater Mining',issued:'2026-04-08',due:'2026-05-08',amount:892000,paid:892000,status:'Paid',items:'Sandvik LH514 LHD Lease, Heavy Equipment Maintenance 3mo'},
  {id:'INV-2026-1006',customer:'Aveng Moolmans Mining',issued:'2026-04-10',due:'2026-05-10',amount:285600,paid:0,status:'Pending',items:'Blasting Operations x4, Drill Rig Rental'},
  {id:'INV-2026-1007',customer:'Concor Holdings Ltd',issued:'2026-02-28',due:'2026-03-30',amount:96400,paid:0,status:'Overdue',items:'Earthworks 2,400m3, Scaffolding 840m2'},
  {id:'INV-2026-1008',customer:'DRA Global Engineering',issued:'2026-04-14',due:'2026-05-14',amount:184000,paid:0,status:'Draft',items:'Project Management Retainer Q2'},
  {id:'INV-2026-1009',customer:'Implats Mine Operations',issued:'2026-04-16',due:'2026-05-16',amount:648000,paid:0,status:'Pending',items:'Xanthate Collector x18, NaCN Solution x4, Lab Services'},
  {id:'INV-2026-1010',customer:'Kumba Iron Ore Ltd',issued:'2026-04-18',due:'2026-05-18',amount:440000,paid:0,status:'Pending',items:'Sandvik Simba E7 Service Contract'},
  {id:'INV-2026-1011',customer:'PRASA Infrastructure',issued:'2026-04-05',due:'2026-05-05',amount:52000,paid:0,status:'Pending',items:'Electrical Testing & Commissioning 5 days'},
  {id:'INV-2026-1012',customer:'Fluor South Africa',issued:'2026-03-01',due:'2026-04-01',amount:168000,paid:0,status:'Overdue',items:'Civil Foundation Design, EIA Report'},
];

let purchaseOrders = [
  // PROJ-2026-001 — Kathu Shaft Ventilation (target actualCost: 1,864,000)
  {id:'PO-2026-0801',projectId:'PROJ-2026-001',supplier:'Atlas Copco SA (Pty) Ltd',ordered:'2026-04-02',expected:'2026-04-23',value:142000,received:142000,status:'Received',products:'Drill Bits 95mm x50, Drill Bits 115mm x20'},
  {id:'PO-2026-0803',projectId:'PROJ-2026-001',supplier:'Sandvik Mining & Rock Solutions',ordered:'2026-04-08',expected:'2026-05-30',value:4850000,received:1673400,status:'Partial',products:'Sandvik LH514 LHD Unit x1'},
  {id:'PO-2026-0804',projectId:'PROJ-2026-001',supplier:'MSA Africa Safety',ordered:'2026-04-10',expected:'2026-04-22',value:48600,received:48600,status:'Received',products:'Hard Hats x120, Safety Harness x20, N95 Respirators x500'},
  // PROJ-2026-002 — Rustenburg Structural Rehab (target actualCost: 1,245,000)
  {id:'PO-2026-0802',projectId:'PROJ-2026-002',supplier:'Macsteel Service Centres SA',ordered:'2026-04-05',expected:'2026-04-15',value:286400,received:286400,status:'Received',products:'IPE200 Beams 80m, Mild Steel Plate 10mm 120m2'},
  {id:'PO-2026-0805',projectId:'PROJ-2026-002',supplier:'AfriSam (Pty) Ltd',ordered:'2026-04-12',expected:'2026-04-16',value:88800,received:88800,status:'Received',products:'Surebuild Cement 42.5N x600 bags'},
  {id:'PO-2026-0807',projectId:'PROJ-2026-002',supplier:'ABB South Africa',ordered:'2026-03-28',expected:'2026-04-18',value:192000,received:192000,status:'Received',products:'ABB MCB 250A x60, VFD Drive 75kW x4'},
  {id:'PO-2026-0808',projectId:'PROJ-2026-002',supplier:'Murray & Roberts Cementation',ordered:'2026-04-18',expected:'2026-05-15',value:320000,received:320000,status:'Received',products:'Y16 Rebar x1000, Y20 Rebar x400'},
  {id:'PO-2026-0809',projectId:'PROJ-2026-002',supplier:'Voltex (Pty) Ltd',ordered:'2026-04-19',expected:'2026-04-28',value:86400,received:86400,status:'Received',products:'4-core 16mm2 Armoured Cable x18 drums'},
  {id:'PO-2026-0811',projectId:'PROJ-2026-002',supplier:'Concor Construction (Pty) Ltd',ordered:'2026-03-15',expected:'2026-04-30',value:450000,received:271400,status:'Partial',products:'Earthworks package, Trench excavation, Compaction'},
  // PROJ-2026-003 — Implats Reagent Plant Civils (target actualCost: 780,000)
  {id:'PO-2026-0806',projectId:'PROJ-2026-003',supplier:'Protea Chemicals',ordered:'2026-04-15',expected:'2026-05-01',value:184800,received:184800,status:'Received',products:'Xanthate Collector x12 drums, NaCN Solution x4 bags'},
  {id:'PO-2026-0810',projectId:'PROJ-2026-003',supplier:'Bulldog Projects (Pty) Ltd',ordered:'2026-04-20',expected:'2026-04-24',value:24800,received:24800,status:'Received',products:'Angle Grinders x8, Threaded Rods x120'},
  {id:'PO-2026-0812',projectId:'PROJ-2026-003',supplier:'SENET Process Engineers',ordered:'2026-03-20',expected:'2026-06-15',value:890000,received:570400,status:'Partial',products:'Reagent dosing skids x3, Instrumentation package, Control valves x12'},
];

let statements = [
  {date:'2026-04-18',ref:'INV-2026-1010',desc:'Invoice – Kumba Iron Ore Ltd',debit:440000,credit:0,bal:440000,status:'Pending'},
  {date:'2026-04-16',ref:'INV-2026-1009',desc:'Invoice – Implats Mine Operations',debit:648000,credit:0,bal:648000,status:'Pending'},
  {date:'2026-04-10',ref:'PMT-0420',desc:'Payment received – WBHO Construction',debit:0,credit:306000,bal:712000,status:'Cleared'},
  {date:'2026-04-08',ref:'PMT-0419',desc:'Payment received – Sibanye-Stillwater',debit:0,credit:892000,bal:892000,status:'Cleared'},
  {date:'2026-04-05',ref:'CN-0091',desc:'Credit note – Murray & Roberts Projects',debit:0,credit:8400,bal:784200,status:'Cleared'},
  {date:'2026-04-03',ref:'INV-2026-1006',desc:'Invoice – Aveng Moolmans Mining',debit:285600,credit:0,bal:285600,status:'Pending'},
  {date:'2026-04-01',ref:'PMT-0416',desc:'Payment received – Kumba Iron Ore',debit:0,credit:384200,bal:384200,status:'Cleared'},
  {date:'2026-03-28',ref:'INV-2026-1003',desc:'Invoice – WBHO Construction',debit:612000,credit:0,bal:612000,status:'Partial'},
];

let payments = [];
let paymentAllocations = [];
let companyTransactions = [
  // ── 2026 ──
  {id:'TRN-2026-001',date:'2026-04-10',ref:'PAY-INV-2026-1001',type:'Inflow',category:'Customer Payment',party:'Kumba Iron Ore Ltd',customerCode:'CUST-001',supplierCode:'',projectId:'PROJ-2026-001',description:'Full payment – INV-2026-1001',amount:384200},
  {id:'TRN-2026-002',date:'2026-04-12',ref:'PAY-INV-2026-1005',type:'Inflow',category:'Customer Payment',party:'Sibanye-Stillwater Mining',customerCode:'CUST-010',supplierCode:'',projectId:'PROJ-2026-003',description:'Full payment – INV-2026-1005',amount:892000},
  {id:'TRN-2026-003',date:'2026-04-10',ref:'PMT-WBHO-0410',type:'Inflow',category:'Customer Payment',party:'WBHO Construction (Pty) Ltd',customerCode:'CUST-003',supplierCode:'',projectId:'PROJ-2026-002',description:'Partial payment – INV-2026-1003',amount:306000},
  {id:'TRN-2026-004',date:'2026-04-02',ref:'RCPT-PO-2026-0801',type:'Outflow',category:'Procurement',party:'Atlas Copco SA (Pty) Ltd',customerCode:'',supplierCode:'SUP-003',projectId:'PROJ-2026-001',description:'Supplier payment – PO-2026-0801',amount:142000},
  {id:'TRN-2026-005',date:'2026-04-10',ref:'RCPT-PO-2026-0804',type:'Outflow',category:'Procurement',party:'MSA Africa Safety',customerCode:'',supplierCode:'SUP-009',projectId:'PROJ-2026-001',description:'Supplier payment – PO-2026-0804',amount:48600},
  {id:'TRN-2026-006',date:'2026-03-28',ref:'RCPT-PO-2026-0807',type:'Outflow',category:'Procurement',party:'ABB South Africa',customerCode:'',supplierCode:'SUP-007',projectId:'PROJ-2026-002',description:'Supplier payment – PO-2026-0807',amount:192000},
  {id:'TRN-2026-007',date:'2026-04-01',ref:'PAY-PAYROLL-APR26',type:'Outflow',category:'Payroll',party:'Staff – April 2026',customerCode:'',supplierCode:'',projectId:'',description:'Monthly payroll – April 2026',amount:1240000},
  {id:'TRN-2026-008',date:'2026-03-01',ref:'PAY-PAYROLL-MAR26',type:'Outflow',category:'Payroll',party:'Staff – March 2026',customerCode:'',supplierCode:'',projectId:'',description:'Monthly payroll – March 2026',amount:1210000},
  {id:'TRN-2026-009',date:'2026-03-15',ref:'PAY-INV-2025-0901',type:'Inflow',category:'Customer Payment',party:'Murray & Roberts Projects',customerCode:'CUST-004',supplierCode:'',projectId:'',description:'March collections – Murray & Roberts',amount:224000},
  {id:'TRN-2026-010',date:'2026-02-28',ref:'PAY-INV-2025-0834',type:'Inflow',category:'Customer Payment',party:'Exxaro Resources Ltd',customerCode:'CUST-002',supplierCode:'',projectId:'',description:'Q1 payment – Exxaro',amount:388000},
  {id:'TRN-2026-011',date:'2026-02-01',ref:'PAY-PAYROLL-FEB26',type:'Outflow',category:'Payroll',party:'Staff – February 2026',customerCode:'',supplierCode:'',projectId:'',description:'Monthly payroll – February 2026',amount:1210000},
  {id:'TRN-2026-012',date:'2026-01-15',ref:'PAY-PAYROLL-JAN26',type:'Outflow',category:'Payroll',party:'Staff – January 2026',customerCode:'',supplierCode:'',projectId:'',description:'Monthly payroll – January 2026',amount:1185000},
  {id:'TRN-2026-013',date:'2026-01-20',ref:'RCPT-SUP-0119',type:'Outflow',category:'Procurement',party:'Macsteel Service Centres SA',customerCode:'',supplierCode:'SUP-001',projectId:'PROJ-2026-002',description:'Steel procurement – Q1',amount:318000},
  {id:'TRN-2026-014',date:'2026-01-10',ref:'PAY-INV-2025-0801',type:'Inflow',category:'Customer Payment',party:'Implats Mine Operations',customerCode:'CUST-007',supplierCode:'',projectId:'',description:'Outstanding Q4 2025 settlement',amount:542000},
  // ── 2025 ──
  {id:'TRN-2025-001',date:'2025-12-22',ref:'PAY-PAYROLL-DEC25',type:'Outflow',category:'Payroll',party:'Staff – December 2025',customerCode:'',supplierCode:'',projectId:'',description:'Monthly payroll – December 2025',amount:1185000},
  {id:'TRN-2025-002',date:'2025-12-15',ref:'PAY-INV-2025-1201',type:'Inflow',category:'Customer Payment',party:'Kumba Iron Ore Ltd',customerCode:'CUST-001',supplierCode:'',projectId:'',description:'Q4 invoice settlement – Kumba',amount:720000},
  {id:'TRN-2025-003',date:'2025-12-10',ref:'PAY-INV-2025-1202',type:'Inflow',category:'Customer Payment',party:'Sibanye-Stillwater Mining',customerCode:'CUST-010',supplierCode:'',projectId:'',description:'December collections',amount:480000},
  {id:'TRN-2025-004',date:'2025-11-28',ref:'RCPT-PO-2025-1101',type:'Outflow',category:'Procurement',party:'Sandvik Mining & Rock Solutions',customerCode:'',supplierCode:'SUP-011',projectId:'',description:'Equipment purchase Q4',amount:2420000},
  {id:'TRN-2025-005',date:'2025-11-15',ref:'PAY-PAYROLL-NOV25',type:'Outflow',category:'Payroll',party:'Staff – November 2025',customerCode:'',supplierCode:'',projectId:'',description:'Monthly payroll – November 2025',amount:1160000},
  {id:'TRN-2025-006',date:'2025-11-05',ref:'PAY-INV-2025-1101',type:'Inflow',category:'Customer Payment',party:'WBHO Construction (Pty) Ltd',customerCode:'CUST-003',supplierCode:'',projectId:'',description:'November settlement – WBHO',amount:856000},
  {id:'TRN-2025-007',date:'2025-10-20',ref:'PAY-INV-2025-1001',type:'Inflow',category:'Customer Payment',party:'Exxaro Resources Ltd',customerCode:'CUST-002',supplierCode:'',projectId:'',description:'October collections',amount:312000},
  {id:'TRN-2025-008',date:'2025-10-01',ref:'PAY-PAYROLL-OCT25',type:'Outflow',category:'Payroll',party:'Staff – October 2025',customerCode:'',supplierCode:'',projectId:'',description:'Monthly payroll – October 2025',amount:1140000},
  {id:'TRN-2025-009',date:'2025-09-18',ref:'PAY-INV-2025-0901',type:'Inflow',category:'Customer Payment',party:'Implats Mine Operations',customerCode:'CUST-007',supplierCode:'',projectId:'',description:'Q3 project milestone – Implats',amount:1240000},
  {id:'TRN-2025-010',date:'2025-09-05',ref:'RCPT-PO-2025-0901',type:'Outflow',category:'Procurement',party:'Protea Chemicals',customerCode:'',supplierCode:'SUP-008',projectId:'',description:'Chemical procurement Q3',amount:224000},
  {id:'TRN-2025-011',date:'2025-09-01',ref:'PAY-PAYROLL-SEP25',type:'Outflow',category:'Payroll',party:'Staff – September 2025',customerCode:'',supplierCode:'',projectId:'',description:'Monthly payroll – September 2025',amount:1140000},
  {id:'TRN-2025-012',date:'2025-08-15',ref:'PAY-INV-2025-0801',type:'Inflow',category:'Customer Payment',party:'Murray & Roberts Projects',customerCode:'CUST-004',supplierCode:'',projectId:'',description:'August milestone – Murray & Roberts',amount:560000},
  {id:'TRN-2025-013',date:'2025-08-01',ref:'PAY-PAYROLL-AUG25',type:'Outflow',category:'Payroll',party:'Staff – August 2025',customerCode:'',supplierCode:'',projectId:'',description:'Monthly payroll – August 2025',amount:1120000},
  {id:'TRN-2025-014',date:'2025-07-25',ref:'RCPT-PO-2025-0701',type:'Outflow',category:'Procurement',party:'ABB South Africa',customerCode:'',supplierCode:'SUP-007',projectId:'',description:'Electrical equipment purchase',amount:384000},
  {id:'TRN-2025-015',date:'2025-07-10',ref:'PAY-INV-2025-0701',type:'Inflow',category:'Customer Payment',party:'Kumba Iron Ore Ltd',customerCode:'CUST-001',supplierCode:'',projectId:'',description:'Mid-year settlement – Kumba',amount:968000},
  {id:'TRN-2025-016',date:'2025-07-01',ref:'PAY-PAYROLL-JUL25',type:'Outflow',category:'Payroll',party:'Staff – July 2025',customerCode:'',supplierCode:'',projectId:'',description:'Monthly payroll – July 2025',amount:1120000},
  {id:'TRN-2025-017',date:'2025-06-20',ref:'PAY-INV-2025-0601',type:'Inflow',category:'Customer Payment',party:'WBHO Construction (Pty) Ltd',customerCode:'CUST-003',supplierCode:'',projectId:'',description:'H1 close – WBHO',amount:742000},
  {id:'TRN-2025-018',date:'2025-06-01',ref:'PAY-PAYROLL-JUN25',type:'Outflow',category:'Payroll',party:'Staff – June 2025',customerCode:'',supplierCode:'',projectId:'',description:'Monthly payroll – June 2025',amount:1100000},
  {id:'TRN-2025-019',date:'2025-05-15',ref:'PAY-INV-2025-0501',type:'Inflow',category:'Customer Payment',party:'Aveng Moolmans Mining',customerCode:'CUST-005',supplierCode:'',projectId:'',description:'May collections – Aveng',amount:428000},
  {id:'TRN-2025-020',date:'2025-04-10',ref:'PAY-INV-2025-0401',type:'Inflow',category:'Customer Payment',party:'Sibanye-Stillwater Mining',customerCode:'CUST-010',supplierCode:'',projectId:'',description:'April settlement – Sibanye',amount:892000},
  {id:'TRN-2025-021',date:'2025-03-15',ref:'PAY-INV-2025-0301',type:'Inflow',category:'Customer Payment',party:'Exxaro Resources Ltd',customerCode:'CUST-002',supplierCode:'',projectId:'',description:'Q1 settlement – Exxaro',amount:510000},
  {id:'TRN-2025-022',date:'2025-02-20',ref:'RCPT-PO-2025-0201',type:'Outflow',category:'Procurement',party:'Voltex (Pty) Ltd',customerCode:'',supplierCode:'SUP-010',projectId:'',description:'Cable and electrical procurement',amount:196000},
  {id:'TRN-2025-023',date:'2025-01-30',ref:'PAY-INV-2025-0101',type:'Inflow',category:'Customer Payment',party:'Implats Mine Operations',customerCode:'CUST-007',supplierCode:'',projectId:'',description:'January opening – Implats',amount:680000},
  // ── 2024 ──
  {id:'TRN-2024-001',date:'2024-12-18',ref:'PAY-INV-2024-1201',type:'Inflow',category:'Customer Payment',party:'Kumba Iron Ore Ltd',customerCode:'CUST-001',supplierCode:'',projectId:'',description:'Year-end settlement – Kumba',amount:1140000},
  {id:'TRN-2024-002',date:'2024-12-10',ref:'RCPT-PO-2024-1201',type:'Outflow',category:'Procurement',party:'Sandvik Mining & Rock Solutions',customerCode:'',supplierCode:'SUP-011',projectId:'',description:'Q4 equipment delivery payment',amount:3200000},
  {id:'TRN-2024-003',date:'2024-11-20',ref:'PAY-INV-2024-1101',type:'Inflow',category:'Customer Payment',party:'WBHO Construction (Pty) Ltd',customerCode:'CUST-003',supplierCode:'',projectId:'',description:'November – WBHO',amount:920000},
  {id:'TRN-2024-004',date:'2024-10-14',ref:'PAY-INV-2024-1001',type:'Inflow',category:'Customer Payment',party:'Murray & Roberts Projects',customerCode:'CUST-004',supplierCode:'',projectId:'',description:'Q3 milestone pmt',amount:640000},
  {id:'TRN-2024-005',date:'2024-09-05',ref:'PAY-INV-2024-0901',type:'Inflow',category:'Customer Payment',party:'Sibanye-Stillwater Mining',customerCode:'CUST-010',supplierCode:'',projectId:'',description:'September collection',amount:770000},
  {id:'TRN-2024-006',date:'2024-08-22',ref:'RCPT-PO-2024-0801',type:'Outflow',category:'Procurement',party:'Atlas Copco SA (Pty) Ltd',customerCode:'',supplierCode:'SUP-003',projectId:'',description:'Equipment procurement Aug 2024',amount:540000},
  {id:'TRN-2024-007',date:'2024-07-12',ref:'PAY-INV-2024-0701',type:'Inflow',category:'Customer Payment',party:'Exxaro Resources Ltd',customerCode:'CUST-002',supplierCode:'',projectId:'',description:'H1 final – Exxaro',amount:482000},
  {id:'TRN-2024-008',date:'2024-06-28',ref:'PAY-INV-2024-0601',type:'Inflow',category:'Customer Payment',party:'Implats Mine Operations',customerCode:'CUST-007',supplierCode:'',projectId:'',description:'Mid-year – Implats',amount:896000},
  {id:'TRN-2024-009',date:'2024-05-15',ref:'RCPT-PO-2024-0501',type:'Outflow',category:'Procurement',party:'AfriSam (Pty) Ltd',customerCode:'',supplierCode:'SUP-005',projectId:'',description:'Cement procurement H1 2024',amount:264000},
  {id:'TRN-2024-010',date:'2024-04-08',ref:'PAY-INV-2024-0401',type:'Inflow',category:'Customer Payment',party:'Kumba Iron Ore Ltd',customerCode:'CUST-001',supplierCode:'',projectId:'',description:'Q1 final – Kumba',amount:1020000},
];
let activityLog = [];

let projects = [
  {id:'PROJ-2026-001',name:'Kathu Shaft Ventilation Upgrade',customerCode:'CUST-001',customerName:'Kumba Iron Ore Ltd',site:'Kathu Mine',manager:'Lerato Mokoena',start:'2026-03-01',end:'2026-09-30',budget:4200000,actualCost:1864000,status:'In Progress'},
  {id:'PROJ-2026-002',name:'Rustenburg Structural Rehab',customerCode:'CUST-003',customerName:'WBHO Construction (Pty) Ltd',site:'Rustenburg Site Office',manager:'Sipho Ndlovu',start:'2026-02-15',end:'2026-07-30',budget:3150000,actualCost:1245000,status:'In Progress'},
  {id:'PROJ-2026-003',name:'Implats Reagent Plant Civils',customerCode:'CUST-007',customerName:'Implats Mine Operations',site:'Implats Processing Plant',manager:'James Donaldson',start:'2026-04-01',end:'2026-12-15',budget:5600000,actualCost:780000,status:'Planned'},
];

// ============================================================
// QUOTES – Non-financial commitments that convert to Projects
// ============================================================
let quotes = [
  {id:'QT-2026-001',customerCode:'CUST-001',customerName:'Kumba Iron Ore Ltd',description:'Kathu Shaft Ventilation Upgrade – Phase 1',
   lines:[
     {description:'Underground Ventilation Assessment',qty:10,costPrice:9231,markupPct:30,unitPrice:12000,price:12000,total:120000,itemType:'service',itemId:'SVC-003'},
     {description:'Ventilation Engineering Design',qty:1,costPrice:66406,markupPct:28,unitPrice:85000,price:85000,total:85000,itemType:'service',itemId:'SVC-001'},
     {description:'Scaffold Erection & Dismantling',qty:1200,costPrice:150,markupPct:20,unitPrice:180,price:180,total:216000,itemType:'service',itemId:'SVC-010'},
     {description:'Project Management – Capital Projects',qty:30,costPrice:11200,markupPct:25,unitPrice:14000,price:14000,total:420000,itemType:'service',itemId:'SVC-004'}
   ],total:841000,status:'Accepted',created:'2026-02-15',validUntil:'2026-03-15',projectId:'PROJ-2026-001',sentDate:'2026-02-20',notes:'Accepted by client on 2026-02-28'},
  {id:'QT-2026-002',customerCode:'CUST-003',customerName:'WBHO Construction (Pty) Ltd',description:'Rustenburg Structural Rehabilitation Works',
   lines:[
     {description:'Structural Steel Design & Drafting',qty:3,costPrice:6364,markupPct:32,unitPrice:8400,price:8400,total:25200,itemType:'service',itemId:'SVC-007'},
     {description:'Structural Welding & Fabrication',qty:1200,costPrice:544,markupPct:25,unitPrice:680,price:680,total:816000,itemType:'service',itemId:'SVC-008'},
     {description:'Concrete Pouring & Finishing',qty:4500,costPrice:311,markupPct:22,unitPrice:380,price:380,total:1710000,itemType:'service',itemId:'SVC-009'},
     {description:'Project Management – Capital Projects',qty:43,costPrice:11200,markupPct:25,unitPrice:14000,price:14000,total:602000,itemType:'service',itemId:'SVC-004'}
   ],total:3153200,status:'Accepted',created:'2026-01-20',validUntil:'2026-02-20',projectId:'PROJ-2026-002',sentDate:'2026-01-25',notes:'Accepted after minor scope amendment'},
  {id:'QT-2026-003',customerCode:'CUST-007',customerName:'Implats Mine Operations',description:'Reagent Plant Civils – New Build',
   lines:[
     {description:'Civil Engineering & Foundation Design',qty:1,costPrice:65385,markupPct:30,unitPrice:85000,price:85000,total:85000,itemType:'service',itemId:'SVC-001'},
     {description:'Bulk Earthworks & Excavation',qty:12000,costPrice:186,markupPct:18,unitPrice:220,price:220,total:2640000,itemType:'service',itemId:'SVC-002'},
     {description:'Concrete Pouring & Finishing',qty:5000,costPrice:311,markupPct:22,unitPrice:380,price:380,total:1900000,itemType:'service',itemId:'SVC-009'},
     {description:'Electrical Testing & Commissioning',qty:10,costPrice:7500,markupPct:28,unitPrice:9600,price:9600,total:96000,itemType:'service',itemId:'SVC-005'}
   ],total:4721000,status:'Accepted',created:'2026-03-05',validUntil:'2026-04-05',projectId:'PROJ-2026-003',sentDate:'2026-03-10',notes:'Full scope accepted'},
  {id:'QT-2026-004',customerCode:'CUST-010',customerName:'Sibanye-Stillwater Mining',description:'Surface Shaft Collar Refurbishment',
   lines:[
     {description:'Non-Destructive Testing (NDT/UT)',qty:40,costPrice:681,markupPct:35,unitPrice:920,price:920,total:36800,itemType:'service',itemId:'SVC-006'},
     {description:'Structural Welding & Fabrication',qty:320,costPrice:544,markupPct:25,unitPrice:680,price:680,total:217600,itemType:'service',itemId:'SVC-008'},
     {description:'Heavy Equipment Preventive Maintenance',qty:60,costPrice:923,markupPct:30,unitPrice:1200,price:1200,total:72000,itemType:'service',itemId:'SVC-011'}
   ],total:326400,status:'Sent',created:'2026-04-05',validUntil:'2026-05-05',projectId:'',sentDate:'2026-04-07',notes:'Awaiting client sign-off'},
  {id:'QT-2026-005',customerCode:'CUST-002',customerName:'Exxaro Resources Ltd',description:'Tailings Dam Rehabilitation',
   lines:[
     {description:'Environmental Impact Assessment',qty:1,costPrice:50000,markupPct:30,unitPrice:65000,price:65000,total:65000,itemType:'service',itemId:'SVC-012'},
     {description:'Civil Engineering & Foundation Design',qty:1,costPrice:65385,markupPct:30,unitPrice:85000,price:85000,total:85000,itemType:'service',itemId:'SVC-001'},
     {description:'Bulk Earthworks & Excavation',qty:18000,costPrice:186,markupPct:18,unitPrice:220,price:220,total:3960000,itemType:'service',itemId:'SVC-002'}
   ],total:4110000,status:'Rejected',created:'2026-03-18',validUntil:'2026-04-18',projectId:'',sentDate:'2026-03-22',notes:'Client selected alternative contractor on price'},
  {id:'QT-2026-006',customerCode:'CUST-004',customerName:'Murray & Roberts Projects',description:'Electrical MCC Upgrade – Sub-station C',
   lines:[
     {description:'Electrical Testing & Commissioning',qty:5,costPrice:7500,markupPct:28,unitPrice:9600,price:9600,total:48000,itemType:'service',itemId:'SVC-005'},
     {description:'Electrical Maintenance & Fault Finding',qty:80,costPrice:623,markupPct:22,unitPrice:760,price:760,total:60800,itemType:'service',itemId:'SVC-013'},
     {description:'Project Management – Capital Projects',qty:10,costPrice:11200,markupPct:25,unitPrice:14000,price:14000,total:140000,itemType:'service',itemId:'SVC-004'}
   ],total:248800,status:'Amended',created:'2026-04-01',validUntil:'2026-05-01',projectId:'',sentDate:'2026-04-03',notes:'Client requested scope reduction – revised quote pending'},
  {id:'QT-2026-007',customerCode:'CUST-005',customerName:'Aveng Moolmans Mining',description:'Decline Shaft Deepening Works',
   lines:[
     {description:'Underground Drilling Operations',qty:5000,costPrice:40,markupPct:20,unitPrice:48,price:48,total:240000,itemType:'service',itemId:'SVC-014'},
     {description:'Blasting & Explosives Handling',qty:8,costPrice:31111,markupPct:35,unitPrice:42000,price:42000,total:336000,itemType:'service',itemId:'SVC-015'},
     {description:'Project Management – Capital Projects',qty:20,costPrice:11200,markupPct:25,unitPrice:14000,price:14000,total:280000,itemType:'service',itemId:'SVC-004'}
   ],total:856000,status:'Draft',created:'2026-04-20',validUntil:'2026-05-20',projectId:'',sentDate:'',notes:''},
];
let quoteCounter = 8;

const trackingItems = [
  {id:'TRK-001',ref:'PO-2026-0803',type:'PO',party:'Sandvik Mining & Rock Solutions',desc:'Sandvik LH514 Load-Haul-Dump Unit',from:'Stockholm, Sweden',to:'Main Yard – Johannesburg',status:'In Transit',eta:'2026-05-30',
   stages:[{l:'Order Confirmed',d:'2026-04-08',s:'done'},{l:'Manufacturing',d:'2026-04-15',s:'done'},{l:'Factory Dispatch',d:'2026-04-30',s:'act'},{l:'Port of Loading – Gothenburg',d:'2026-05-05',s:'pend'},{l:'Customs – Durban',d:'2026-05-20',s:'pend'},{l:'Delivered to Site',d:'2026-05-30',s:'pend'}]},
  {id:'TRK-002',ref:'PO-2026-0802',type:'PO',party:'Macsteel Service Centres SA',desc:'IPE200 Beams & Mild Steel Plate',from:'Macsteel Witbank',to:'Site Office – Kathu',status:'In Transit',eta:'2026-04-15',
   stages:[{l:'Order Confirmed',d:'2026-04-05',s:'done'},{l:'Cut to Length',d:'2026-04-08',s:'done'},{l:'Quality Check',d:'2026-04-10',s:'done'},{l:'Truck Dispatched',d:'2026-04-12',s:'act'},{l:'Delivered',d:'2026-04-15',s:'pend'}]},
  {id:'TRK-003',ref:'PO-2026-0806',type:'PO',party:'Protea Chemicals',desc:'Xanthate Collector & Sodium Cyanide',from:'JHB Chemical Depot',to:'Implats Processing Plant',status:'Processing',eta:'2026-05-01',
   stages:[{l:'Order Received',d:'2026-04-15',s:'done'},{l:'Hazmat Documentation',d:'2026-04-18',s:'act'},{l:'Hazmat Approval',d:'2026-04-22',s:'pend'},{l:'Dispatch',d:'2026-04-26',s:'pend'},{l:'Delivered',d:'2026-05-01',s:'pend'}]},
  {id:'TRK-004',ref:'INV-2026-1003',type:'INV',party:'WBHO Construction (Pty) Ltd',desc:'Rebar Supply & Concrete Works Invoice',from:'NexusERP Billing',to:'WBHO Finance Dept',status:'Awaiting Payment',eta:'2026-04-15',
   stages:[{l:'Invoice Issued',d:'2026-03-15',s:'done'},{l:'Delivered to Client',d:'2026-03-16',s:'done'},{l:'Client Acknowledged',d:'2026-03-20',s:'done'},{l:'Partial Payment R306K',d:'2026-04-10',s:'act'},{l:'Balance Due',d:'2026-04-15',s:'pend'},{l:'Fully Settled',d:'TBD',s:'pend'}]},
  {id:'TRK-005',ref:'PO-2026-0809',type:'PO',party:'Voltex (Pty) Ltd',desc:'4-core 16mm2 Armoured Cable x18 Drums',from:'Voltex Warehouse – JHB',to:'Main Yard – Johannesburg',status:'In Transit',eta:'2026-04-28',
   stages:[{l:'PO Confirmed',d:'2026-04-19',s:'done'},{l:'Picking & Packing',d:'2026-04-20',s:'act'},{l:'Out for Delivery',d:'2026-04-24',s:'pend'},{l:'Delivered',d:'2026-04-28',s:'pend'}]},
];

const notifications = [
  {icon:'&#9888;',msg:'INV-2026-1004 is 31 days overdue – R138,000 from Murray & Roberts Projects'},
  {icon:'&#9888;',msg:'INV-2026-1007 is 22 days overdue – R96,400 from Concor Holdings Ltd'},
  {icon:'&#9888;',msg:'INV-2026-1012 is 20 days overdue – R168,000 from Fluor South Africa'},
  {icon:'&#9651;',msg:'WBHO Construction exceeded 60-day terms on INV-2026-1003 (R306K outstanding)'},
  {icon:'&#9711;',msg:'PO-2026-0803 – Sandvik LH514 still in manufacturing phase (R4.85M)'},
  {icon:'&#8595;',msg:'PRD-012 Xanthate Collector low stock: 24 units (reorder at 4)'},
];

const charts={};
let chartsBootstrapped=false;
let customerCounter=100, invoiceCounter=1015, poCounter=811, supplierCounter=13, productCounter=21, serviceCounter=17;
let currentUser=null;
let editState={type:null,id:null};
let adminEditId=null;
let projectEditId=null;
let appUsers=[
  {id:'USR-001',name:'James Donaldson',email:'james.d@nexuserp.co.za',role:'Admin',status:'Active',lastLogin:'2026-04-21 09:14'},
  {id:'USR-002',name:'Lerato Mokoena',email:'lerato.m@nexuserp.co.za',role:'Manager',status:'Active',lastLogin:'2026-04-20 17:42'},
  {id:'USR-003',name:'Sipho Ndlovu',email:'sipho.n@nexuserp.co.za',role:'Finance',status:'Active',lastLogin:'2026-04-21 08:05'},
];
let appConfig={
  vatRate:15,
  poVatRate:15,
  defaultPaymentTerms:'Net 30',
  maxMarkupPercent:35,
  requireProjectLink:true,
};
let rbacPermissions={
  admin_users:{label:'Manage Users',roles:{Admin:true,Manager:false,Finance:false}},
  admin_config:{label:'Change Finance Config',roles:{Admin:true,Manager:false,Finance:false}},
  create_project:{label:'Create Projects',roles:{Admin:true,Manager:true,Finance:false}},
  create_po:{label:'Create Purchase Orders',roles:{Admin:true,Manager:true,Finance:false}},
  create_invoice:{label:'Create Invoices',roles:{Admin:true,Manager:true,Finance:true}},
  update_doc_status:{label:'Update Invoice/PO Status',roles:{Admin:true,Manager:true,Finance:true}},
};
let auditLog=[
  {ts:'2026-04-21 09:14',user:'James Donaldson',role:'Admin',action:'LOGIN',module:'Auth',detail:'Signed in to NexusERP'},
  {ts:'2026-04-21 10:02',user:'Lerato Mokoena',role:'Manager',action:'CREATE',module:'PO',detail:'Created PO-2026-0810'},
  {ts:'2026-04-21 10:24',user:'Sipho Ndlovu',role:'Finance',action:'PAYMENT',module:'Invoices',detail:'Applied payment to INV-2026-1003'},
];
const APP_STATE_KEY='nexuserp_app_state_v2';
const SESSION_COOKIE='nexuserp_session_user';
let isAppBootstrapped=false;
let isAppInitializing=false;

// ============================================================
// UTILS
// ============================================================
function fmt(n){return new Intl.NumberFormat('en-ZA',{style:'currency',currency:'ZAR',minimumFractionDigits:2,maximumFractionDigits:2}).format(n);}
function fmtShort(n){if(n>=1000000)return'R'+(n/1000000).toFixed(1)+'M';if(n>=1000)return'R'+(n/1000).toFixed(0)+'K';return fmt(n);}
function bc(s){return{Paid:'badge-paid',Sent:'badge-pending',Overdue:'badge-overdue',Draft:'badge-draft',Approved:'badge-approved',Issued:'badge-pending',Received:'badge-received',Partial:'badge-partial','Partially Paid':'badge-partial',Unpaid:'badge-pending',Active:'badge-active','On Hold':'badge-onhold',Inactive:'badge-inactive',Cleared:'badge-paid','In Transit':'badge-transit',Processing:'badge-processing','Awaiting Payment':'badge-pending','At Customs':'badge-partial',Delivered:'badge-received',Accepted:'badge-paid',Rejected:'badge-overdue',Amended:'badge-partial'}[s]||'badge-draft';}
function rowLineSummary(lines){
  if(!Array.isArray(lines)||!lines.length)return'General';
  return lines.map(l=>`${l.description||'Item'} x${Number(l.qty)||1}`).join(', ');
}
function canCurrent(permissionKey){
  const role=currentUser?.role||'Finance';
  return !!rbacPermissions?.[permissionKey]?.roles?.[role];
}
function requirePermission(permissionKey, actionLabel){
  if(canCurrent(permissionKey))return true;
  showToast(`Access denied: ${actionLabel}`);
  addAudit('DENIED','RBAC',`${currentUser?.name||'Guest'} blocked for ${actionLabel}`);
  return false;
}
function addAudit(action,module,detail){
  auditLog.unshift({
    ts:new Date().toLocaleString('en-ZA'),
    user:currentUser?.name||'Guest User',
    role:currentUser?.role||'Guest',
    action,
    module,
    detail
  });
  if(auditLog.length>200)auditLog.length=200;
}
function toNum(v, fallback=0){
  const n=Number(v);
  return Number.isFinite(n)?n:fallback;
}
function quarterOfMonth(monthIndex){
  if(monthIndex<=3)return 'Q1';
  if(monthIndex<=6)return 'Q2';
  if(monthIndex<=9)return 'Q3';
  return 'Q4';
}
function matchDateFilters(isoDate,filters={}){
  if(!isoDate)return false;
  const d=new Date(`${isoDate}T00:00:00`);
  if(Number.isNaN(d.getTime()))return false;
  if(filters.from){
    const fromD=new Date(`${filters.from}T00:00:00`);
    if(d<fromD)return false;
  }
  if(filters.to){
    const toD=new Date(`${filters.to}T23:59:59`);
    if(d>toD)return false;
  }
  const year=String(d.getFullYear());
  const month=d.getMonth()+1;
  const quarter=quarterOfMonth(month);
  if(filters.year&&String(filters.year)!==year)return false;
  if(filters.quarter&&filters.quarter!==quarter)return false;
  if(filters.month&&toNum(filters.month)!==month)return false;
  return true;
}
function activityTimeLabel(isoDate){
  const d=new Date(`${isoDate}T12:00:00`);
  const now=new Date();
  const diffMs=now-d;
  const days=Math.floor(diffMs/86400000);
  if(days<=0)return 'Today';
  if(days===1)return 'Yesterday';
  return `${days}d ago`;
}
function nextTransId(dateIso){
  const year=(dateIso||todayISO()).slice(0,4)||String(new Date().getFullYear());
  const max=Math.max(0,...companyTransactions.map(t=>toNum(String(t.id||'').split('-').pop(),0)));
  return `TRN-${year}-${String(max+1).padStart(3,'0')}`;
}
function normalizeEntityStatus(status){
  const allowed=['Active','Inactive','On Hold'];
  return allowed.includes(status)?status:'Active';
}
function normalizeInvoiceStatus(status){
  const map={Done:'Paid',Pending:'Sent'};
  const next=map[status]||status;
  const allowed=['Draft','Sent','Paid','Overdue','Partial'];
  return allowed.includes(next)?next:'Draft';
}
function normalizePOStatus(status){
  const map={Done:'Received',Pending:'Issued'};
  const next=map[status]||status;
  const allowed=['Draft','Approved','Issued','Received','Partial'];
  return allowed.includes(next)?next:'Draft';
}
function extractMaxNumericCode(arr, field, prefix){
  let max=0;
  arr.forEach(item=>{
    const raw=String(item?.[field]||item?.id||'');
    const m=raw.match(new RegExp(`^${prefix}(\\d+)$`));
    if(m)max=Math.max(max,toNum(m[1],0));
  });
  return max;
}
function nextCode(prefix, num, len=3){return `${prefix}${String(num).padStart(len,'0')}`;}
function nextYearlyCode(prefix, num, year){
  return `${prefix}${year}-${String(num).padStart(3,'0')}`;
}
function isValidEmail(email){
  if(!email)return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function normalizeCoreDataModels(){
  customers=customers.map(c=>{
    const customerCode=c.customerCode||((String(c.id||'').startsWith('CUST-'))?c.id:nextCode('CUST-',toNum(String(c.id||'').replace(/\D/g,''),1)));
    const companyName=(c.companyName||c.name||'').trim();
    const contactName=(c.contactName||c.contact||'').trim();
    const email=(c.email||'').trim();
    const billingAddress=(c.billingAddress||c.address||'').trim();
    const deliveryAddress=(c.deliveryAddress||billingAddress||'').trim();
    const industry=c.industry||c.segment||'Mining';
    const paymentTerms=c.paymentTerms||c.terms||'Net 30';
    const creditLimit=Math.max(0,toNum(c.creditLimit||c.credit,0));
    const currentBalance=Math.max(0,toNum(c.currentBalance||c.balance,0));
    const model={customerCode,companyName,industry,status:normalizeEntityStatus(c.status),creditLimit,paymentTerms,vatNumber:c.vatNumber||'',contactName,email,phone:c.phone||'',billingAddress,deliveryAddress,notes:Array.isArray(c.notes)?c.notes:[],currentBalance,joinDate:c.joinDate||c.createdAt||''};
    return {...c,...model,id:customerCode,name:companyName,segment:industry,contact:contactName,credit:creditLimit,balance:currentBalance,terms:paymentTerms};
  });

  suppliers=suppliers.map(s=>{
    const supplierCode=s.supplierCode||((String(s.id||'').startsWith('SUP-'))?s.id:nextCode('SUP-',toNum(String(s.id||'').replace(/\D/g,''),1)));
    const companyName=(s.companyName||s.name||'').trim();
    const model={supplierCode,companyName,category:s.category||'Mining Equipment',contactName:(s.contactName||s.contact||'').trim(),email:(s.email||'').trim(),phone:(s.phone||'').trim(),paymentTerms:s.paymentTerms||s.terms||'Net 30',vatNumber:s.vatNumber||'',leadTime:Math.max(0,toNum(s.leadTime||s.lead,0)),status:normalizeEntityStatus(s.status),physicalAddress:(s.physicalAddress||s.address||'').trim(),dispatchAddress:(s.dispatchAddress||s.physicalAddress||s.address||'').trim(),spend:Math.max(0,toNum(s.spend||s.ytdSpend,0)),totalPOs:Math.max(0,toNum(s.totalPOs,0))};
    return {...s,...model,id:supplierCode,name:companyName,contact:model.contactName,lead:model.leadTime,terms:model.paymentTerms,ytdSpend:model.spend};
  });

  products=products.map(p=>{
    const supplierNameRaw=(p.supplierName||p.supplier||'').trim();
    const supplierMatch=suppliers.find(s=>s.supplierCode===supplierNameRaw||s.companyName===supplierNameRaw);
    const supplierCode=p.supplierCode||supplierMatch?.supplierCode||'';
    const supplierName=supplierMatch?.companyName||supplierNameRaw;
    const model={sku:p.sku||`PRD-${String(toNum(String(p.id||'').replace(/\D/g,''),1)).padStart(3,'0')}`,name:(p.name||'').trim(),category:p.category||'Mining Equipment',supplierCode,supplierName,supplier:supplierName,unitPrice:Math.max(0,toNum(p.unitPrice||p.price,0)),unit:p.unit||'Each',stock:Math.max(0,toNum(p.stock,0)),reorderLevel:Math.max(0,toNum(p.reorderLevel||p.reorder,0)),status:normalizeEntityStatus(p.status)};
    return {...p,...model,price:model.unitPrice,reorder:model.reorderLevel};
  });

  services=services.map(s=>{
    const rt=(String(s.rateType||'').toLowerCase()==='hourly')?'hourly':'fixed';
    const model={serviceCode:s.serviceCode||s.code||`SVC-${String(toNum(String(s.id||'').replace(/\D/g,''),1)).padStart(3,'0')}`,name:(s.name||'').trim(),category:s.category||'Engineering',rateType:rt,rate:Math.max(0,toNum(s.rate,0)),unit:s.unit||(rt==='hourly'?'Hour':'Item'),supplier:s.supplier||'',status:normalizeEntityStatus(s.status)};
    return {...s,...model,code:model.serviceCode};
  });
}
function normalizeProjectsAndLinks(){
  projects=projects.map(p=>{
    const customer=customers.find(c=>c.customerCode===p.customerCode||c.companyName===p.customerName||c.companyName===p.customer);
    const customerCode=customer?.customerCode||p.customerCode||'';
    const customerName=customer?.companyName||p.customerName||p.customer||'';
    return {
      ...p,
      id:p.id||`PROJ-${new Date().getFullYear()}-001`,
      name:p.name||'Project',
      customerCode,
      customerName,
      site:p.site||'Main Site',
      manager:p.manager||'Unassigned',
      start:p.start||todayISO(),
      end:p.end||todayISO(),
      budget:Math.max(0,toNum(p.budget,0)),
      actualCost:Math.max(0,toNum(p.actualCost,0)),
      status:['Planned','In Progress','On Hold','Completed'].includes(p.status)?p.status:'Planned'
    };
  });
  invoices=invoices.map(inv=>{
    const byCustomer=projects.find(p=>p.customerCode===inv.customerCode||p.customerName===(inv.customerName||inv.customer));
    return {...inv,projectId:inv.projectId||byCustomer?.id||'',projectName:inv.projectName||byCustomer?.name||''};
  });
  purchaseOrders=purchaseOrders.map(po=>{
    const linked=projects.find(p=>p.id===po.projectId);
    return {...po,projectId:po.projectId||'',projectName:po.projectName||linked?.name||''};
  });
}
function normalizeQuotes(){
  quotes=quotes.map(q=>{
    const customer=customers.find(c=>c.customerCode===q.customerCode||c.companyName===q.customerName);
    const customerCode=customer?.customerCode||q.customerCode||'';
    const customerName=customer?.companyName||q.customerName||'';
    const total=q.total||quoteTotal(q.lines)||0;
    return {
      ...q,
      customerCode,
      customerName,
      total,
      status:normalizeQuoteStatus(q.status||'Draft'),
      lines:Array.isArray(q.lines)?q.lines:[],
      created:q.created||todayISO(),
      validUntil:q.validUntil||'',
      notes:q.notes||'',
      projectId:q.projectId||'',
      sentDate:q.sentDate||''
    };
  });
}
function ensureDocumentLines(){
  invoices=invoices.map(inv=>{
    if(Array.isArray(inv.lines)&&inv.lines.length)return inv;
    return {...inv,lines:[{description:inv.items||'Line item',qty:1,price:inv.amount,total:inv.amount}]};
  });
  purchaseOrders=purchaseOrders.map(po=>{
    if(Array.isArray(po.lines)&&po.lines.length)return po;
    return {...po,lines:[{description:po.products||'PO item',qty:1,price:po.value,total:po.value}]};
  });
}
function ensureCustomerNotes(){
  customers=customers.map(c=>({...c,notes:Array.isArray(c.notes)?c.notes:[]}));
}
function todayISO(){return new Date().toISOString().slice(0,10);}
function computeInvoiceStatus(inv){
  const paid=Math.round((Number(inv.paid)||0)*100)/100;
  const amount=Math.round((Number(inv.amount)||0)*100)/100;
  if(amount<=0)return 'Draft';
  if(paid>=amount)return 'Paid';
  if(paid>0)return 'Partial';
  if((inv.due||'')<todayISO())return 'Overdue';
  return inv.status==='Draft'?'Draft':'Sent';
}
function computePOStatus(po){
  const received=Math.round((Number(po.received)||0)*100)/100;
  const value=Math.round((Number(po.value)||0)*100)/100;
  if(value<=0)return 'Draft';
  if(received>=value)return 'Received';
  if(received>0)return 'Partial';
  if(po.status==='Approved'||po.status==='Draft')return po.status;
  return 'Issued';
}
function normalizeBusinessStatuses(){
  customers.forEach(c=>{c.status=normalizeEntityStatus(c.status);});
  suppliers.forEach(s=>{s.status=normalizeEntityStatus(s.status);});
  invoices.forEach(inv=>{inv.status=normalizeInvoiceStatus(computeInvoiceStatus(inv));});
  purchaseOrders.forEach(po=>{po.status=normalizePOStatus(computePOStatus(po));});
}
function recalcCustomerBalances(){
  const balanceByCode={};
  const paymentByCode={};
  const allocationByCode={};
  invoices.forEach(inv=>{
    const key=inv.customerCode||(customers.find(c=>c.companyName===(inv.customerName||inv.customer))?.customerCode||'');
    if(!key)return;
    const bal=Math.max(0,toNum(inv.amount,0)-toNum(inv.paid,0));
    balanceByCode[key]=(balanceByCode[key]||0)+bal;
  });
  payments.forEach(p=>{
    const key=p.customerCode;
    if(!key)return;
    paymentByCode[key]=(paymentByCode[key]||0)+toNum(p.amount,0);
  });
  paymentAllocations.forEach(a=>{
    const inv=invoices.find(i=>i.id===a.invoiceId);
    const key=inv?.customerCode||'';
    if(!key)return;
    allocationByCode[key]=(allocationByCode[key]||0)+toNum(a.allocatedAmount,0);
  });
  customers.forEach(c=>{
    c.currentBalance=Math.round((balanceByCode[c.customerCode]||0)*100)/100;
    c.balance=c.currentBalance;
    c.credit=Math.round(((paymentByCode[c.customerCode]||0)-(allocationByCode[c.customerCode]||0))*100)/100;
  });
}
function recalcProjectFinancials(){
  const costByProject={};
  const revenueByProject={};
  purchaseOrders.forEach(po=>{
    if(!po.projectId)return;
    const cost=toNum(po.received,0)||0;  // only count what's actually received as project cost
    costByProject[po.projectId]=(costByProject[po.projectId]||0)+cost;
  });
  invoices.forEach(inv=>{
    if(!inv.projectId)return;
    const rev=toNum(inv.amount,0);
    revenueByProject[inv.projectId]=(revenueByProject[inv.projectId]||0)+rev;
  });
  // Only override seed values when real PO/invoice data actually exists for that project
  projects=projects.map(p=>({
    ...p,
    actualCost: costByProject[p.id]!==undefined ? Math.round(costByProject[p.id]*100)/100 : (p.actualCost||0),
    revenue:    revenueByProject[p.id]!==undefined ? Math.round(revenueByProject[p.id]*100)/100 : (p.revenue||0)
  }));
}
function renderLineTable(lines){
  const rows=(Array.isArray(lines)?lines:[]).map(l=>{
    const up=Number(l.unitPrice)||Number(l.price)||0;
    const qty=Number(l.qty)||1;
    return `<tr>
      <td style="font-size:12px">${l.description||'Item'}</td>
      <td style="font-family:var(--font-mono);font-size:11px">${qty}</td>
      <td class="amount">${fmt(up)}</td>
      <td class="amount">${fmt(qty*up)}</td>
    </tr>`;
  }).join('');
  return `<div class="card" style="padding:0;margin-top:12px"><div class="table-wrap"><table>
    <thead><tr><th>Description</th><th>Qty</th><th>Unit Price</th><th>Line Total</th></tr></thead>
    <tbody>${rows||'<tr><td colspan="4" class="empty-state">No line items</td></tr>'}</tbody>
  </table></div></div>`;
}
function setCookie(name,val,days){
  const d=new Date();d.setTime(d.getTime()+(days*24*60*60*1000));
  document.cookie=`${name}=${encodeURIComponent(val)};expires=${d.toUTCString()};path=/`;
}
function getCookie(name){
  const key=name+'=';
  return document.cookie.split(';').map(x=>x.trim()).find(x=>x.startsWith(key))?.slice(key.length)||'';
}
function delCookie(name){document.cookie=`${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;}
function persistState(){
  const payload={
    suppliers,products,services,customers,invoices,purchaseOrders,statements,projects,quotes,payments,paymentAllocations,companyTransactions,activityLog,_ptkData,
    appUsers,appConfig,rbacPermissions,auditLog,trackingItems,
    counters:{customerCounter,invoiceCounter,poCounter,supplierCounter,productCounter,serviceCounter,quoteCounter}
  };
  try{localStorage.setItem(APP_STATE_KEY,JSON.stringify(payload));}catch(e){sessionStorage.setItem(APP_STATE_KEY,JSON.stringify(payload));}
}
function loadPersistedState(){
  const raw=localStorage.getItem(APP_STATE_KEY)||sessionStorage.getItem(APP_STATE_KEY);
  if(!raw)return;
  try{
    const state=JSON.parse(raw);
    suppliers=Array.isArray(state.suppliers)?state.suppliers:suppliers;
    products=Array.isArray(state.products)?state.products:products;
    services=Array.isArray(state.services)?state.services:services;
    customers=Array.isArray(state.customers)?state.customers:customers;
    invoices=Array.isArray(state.invoices)?state.invoices:invoices;
    purchaseOrders=Array.isArray(state.purchaseOrders)?state.purchaseOrders:purchaseOrders;
    statements=Array.isArray(state.statements)?state.statements:statements;
    projects=Array.isArray(state.projects)?state.projects:projects;
    quotes=Array.isArray(state.quotes)?state.quotes:quotes;
    payments=Array.isArray(state.payments)?state.payments:payments;
    paymentAllocations=Array.isArray(state.paymentAllocations)?state.paymentAllocations:paymentAllocations;
    companyTransactions=Array.isArray(state.companyTransactions)?state.companyTransactions:companyTransactions;
    activityLog=Array.isArray(state.activityLog)?state.activityLog:activityLog;
    _ptkData=state._ptkData&&typeof state._ptkData==='object'?state._ptkData:_ptkData;
    if(Array.isArray(state.trackingItems))trackingItems.splice(0,trackingItems.length,...state.trackingItems);
    appUsers=Array.isArray(state.appUsers)?state.appUsers:appUsers;
    appConfig=state.appConfig?{...appConfig,...state.appConfig}:appConfig;
    rbacPermissions=state.rbacPermissions?state.rbacPermissions:rbacPermissions;
    auditLog=Array.isArray(state.auditLog)?state.auditLog:auditLog;
    const c=state.counters||{};
    customerCounter=c.customerCounter||customerCounter;
    invoiceCounter=c.invoiceCounter||invoiceCounter;
    poCounter=c.poCounter||poCounter;
    supplierCounter=c.supplierCounter||supplierCounter;
    productCounter=c.productCounter||productCounter;
    serviceCounter=c.serviceCounter||serviceCounter;
    quoteCounter=c.quoteCounter||quoteCounter;
  }catch{}
}

// ── Derive transactions from invoices & POs so Transactions view always matches reality ──
function syncDocumentTransactions(){
  if(!Array.isArray(companyTransactions))companyTransactions=[];
  const existingRefs=new Set(companyTransactions.map(t=>t.ref));
  // Paid invoices → Inflow
  (invoices||[]).forEach(inv=>{
    if(!inv.id||(inv.paid||0)<=0)return;
    const ref=`PAY-${inv.id}`;
    if(existingRefs.has(ref))return;
    companyTransactions.push({
      id:'TRN-'+Date.now()+'-'+inv.id,
      date:inv.issued||todayISO(),
      ref,
      type:'Inflow',
      category:'Customer Payment',
      party:inv.customerName||inv.customer||'',
      customerCode:inv.customerCode||'',
      supplierCode:'',
      projectId:inv.projectId||'',
      description:`Payment received – ${inv.id}`,
      amount:Math.max(0,inv.paid||0)
    });
    existingRefs.add(ref);
  });
  // POs with received payments → Outflow
  (purchaseOrders||[]).forEach(po=>{
    if(!po.id||(po.received||0)<=0)return;
    const ref=`RCPT-${po.id}`;
    if(existingRefs.has(ref))return;
    companyTransactions.push({
      id:'TRN-'+Date.now()+'-'+po.id,
      date:po.ordered||todayISO(),
      ref,
      type:'Outflow',
      category:'Procurement',
      party:po.supplierName||po.supplier||'',
      customerCode:'',
      supplierCode:po.supplierCode||'',
      projectId:po.projectId||'',
      description:`Supplier payment – ${po.id}`,
      amount:Math.max(0,po.received||0)
    });
    existingRefs.add(ref);
  });
  // Sort descending by date
  companyTransactions.sort((a,b)=>String(b.date).localeCompare(String(a.date)));
  if(companyTransactions.length>800)companyTransactions.length=800;
}

// ── Rebuild statement ledger from live invoice + payment data ──
function syncStatementFromInvoices(){
  if(!Array.isArray(statements))statements=[];
  // Ensure every invoice has a statement debit row
  (invoices||[]).forEach(inv=>{
    if(!inv.id||!inv.issued)return;
    const exists=statements.find(s=>s.ref===inv.id);
    const customerName=inv.customerName||inv.customer||'';
    if(!exists){
      statements.push({
        date:inv.issued,
        ref:inv.id,
        desc:`Invoice – ${customerName}`,
        debit:inv.amount||0,
        credit:0,
        bal:0,
        status:inv.status||'Pending',
        customerCode:inv.customerCode||''
      });
    } else {
      // Keep status in sync
      exists.status=inv.status||exists.status;
      exists.debit=inv.amount||exists.debit;
      exists.customerCode=inv.customerCode||exists.customerCode;
    }
  });
  // Ensure every invoice payment has a statement credit row
  (invoices||[]).forEach(inv=>{
    if(!inv.id||(inv.paid||0)<=0)return;
    const pmtRef=`PMT-${inv.id}`;
    const pmtExists=statements.find(s=>s.ref===pmtRef);
    const customerName=inv.customerName||inv.customer||'';
    if(!pmtExists){
      // Use a slightly later date than the invoice
      const pmtDate=inv.issued||todayISO();
      statements.push({
        date:pmtDate,
        ref:pmtRef,
        desc:`Payment received – ${customerName}`,
        debit:0,
        credit:inv.paid,
        bal:0,
        status:'Cleared',
        customerCode:inv.customerCode||''
      });
    } else {
      // Sync payment amount if invoice.paid changed
      pmtExists.credit=inv.paid;
    }
  });
  statements.sort((a,b)=>b.date.localeCompare(a.date));
}

function ensureCoreHistories(){
  if(!Array.isArray(companyTransactions))companyTransactions=[];
  if(!Array.isArray(activityLog))activityLog=[];
  if(!Array.isArray(payments))payments=[];
  if(!Array.isArray(paymentAllocations))paymentAllocations=[];
  if(!Array.isArray(statements))statements=[];
  if(!activityLog.length){
    // Rich seed data – realistic recent activity across all modules
    const seedEvents=[
      // Today / very recent
      {type:'payment_received',   message:'Payment R892,000 received for INV-2026-1001',      entityId:'INV-2026-1001', date:'2026-04-26T09:14:00'},
      {type:'invoice_created',    message:'Tax invoice raised for Kumba Iron Ore Ltd',         entityId:'INV-2026-1010', date:'2026-04-26T08:47:00'},
      {type:'status_updated',     message:'PO-2026-0803 status changed to Approved',           entityId:'PO-2026-0803',  date:'2026-04-26T08:30:00'},
      {type:'task_updated',       message:'Task "Shaft sinking phase 2" moved to In Review',   entityId:'PROJ-2026-001', date:'2026-04-26T08:05:00'},
      // Yesterday
      {type:'po_created',         message:'Purchase order raised for Sandvik Mining & Rock Solutions', entityId:'PO-2026-0803', date:'2026-04-25T16:22:00'},
      {type:'payment_received',   message:'Payment R648,000 received for INV-2026-1009',      entityId:'INV-2026-1009', date:'2026-04-25T15:01:00'},
      {type:'invoice_updated',    message:'Invoice INV-2026-1008 updated – line items revised',entityId:'INV-2026-1008', date:'2026-04-25T14:33:00'},
      {type:'note_added',         message:'Credit note ADJ-001 added to statements ledger',    entityId:'ADJ-001',       date:'2026-04-25T13:48:00'},
      {type:'task_updated',       message:'Milestone "Headgear commissioning" marked at-risk', entityId:'PROJ-2026-001', date:'2026-04-25T11:20:00'},
      {type:'transaction_recorded',message:'Supplier outflow R4,850,000 captured for PO-2026-0803', entityId:'PO-2026-0803', date:'2026-04-25T10:55:00'},
      // This week
      {type:'invoice_created',    message:'Tax invoice raised for Implats Mine Operations',    entityId:'INV-2026-1009', date:'2026-04-24T15:10:00'},
      {type:'customer_created',   message:'New customer WBHO Construction onboarded',          entityId:'CUST-012',      date:'2026-04-24T11:30:00'},
      {type:'po_updated',         message:'PO-2026-0806 delivery extended to 2026-05-08',      entityId:'PO-2026-0806',  date:'2026-04-23T14:05:00'},
      {type:'status_updated',     message:'Invoice INV-2026-1005 marked Paid',                 entityId:'INV-2026-1005', date:'2026-04-23T09:40:00'},
      {type:'task_updated',       message:'Risk "Ground instability – Level 3" escalated to High', entityId:'PROJ-2026-001', date:'2026-04-22T16:00:00'},
      {type:'invoice_created',    message:'Tax invoice raised for PRASA Infrastructure',       entityId:'INV-2026-1011', date:'2026-04-22T10:22:00'},
      {type:'transaction_recorded',message:'Inflow R224,000 received – operational revenue',   entityId:'TRN-2026-001',  date:'2026-04-21T15:45:00'},
      {type:'project_created',    message:'Project PROJ-2026-003 created for DRA Global',      entityId:'PROJ-2026-003', date:'2026-04-21T09:00:00'},
      {type:'supplier_created',   message:'Supplier Herrenknecht AG added to supply chain',    entityId:'SUP-013',       date:'2026-04-20T11:15:00'},
      {type:'po_created',         message:'Purchase order raised for Murray & Roberts Cementation', entityId:'PO-2026-0810', date:'2026-04-20T09:30:00'},
      // Last month
      {type:'payment_received',   message:'Payment R440,000 received for INV-2026-1003',      entityId:'INV-2026-1003', date:'2026-04-15T14:00:00'},
      {type:'invoice_created',    message:'Tax invoice raised for Aveng Moolmans Mining',      entityId:'INV-2026-1006', date:'2026-04-10T10:00:00'},
      {type:'status_updated',     message:'PO-2026-0804 status changed to Received',           entityId:'PO-2026-0804',  date:'2026-04-08T12:30:00'},
      {type:'project_created',    message:'Project PROJ-2026-002 created for Sibanye-Stillwater', entityId:'PROJ-2026-002', date:'2026-04-05T08:00:00'},
      {type:'transaction_recorded',message:'Payroll outflow R1,240,000 – April 2026',          entityId:'TRN-2026-002',  date:'2026-04-01T08:00:00'},
    ];
    seedEvents.forEach((e,i)=>{
      activityLog.push({id:`ACT-SEED-${i}`,type:e.type,message:e.message,entityId:e.entityId,date:e.date});
    });
    activityLog.sort((a,b)=>String(b.date).localeCompare(String(a.date)));
  }
}

function logActivity(type,message,entityId=''){
  // Auto-upgrade generic type names based on entityId prefix
  if(type==='project_created'&&(entityId||'').startsWith('CUST-'))type='customer_created';
  if(type==='project_created'&&(entityId||'').startsWith('SUP-'))type='supplier_created';
  ensureCoreHistories();
  activityLog.unshift({
    id:`ACT-${Date.now()}`,
    type,
    message,
    entityId,
    date:new Date().toISOString()
  });
  if(activityLog.length>200)activityLog.length=200;
}

function recordCompanyTransaction(entry){
  ensureCoreHistories();
  const date=entry.date||todayISO();
  companyTransactions.unshift({
    id:entry.id||nextTransId(date),
    date,
    ref:entry.ref||'',
    type:entry.type||'Inflow',
    category:entry.category||'Operational',
    party:entry.party||'N/A',
    customerCode:entry.customerCode||'',
    supplierCode:entry.supplierCode||'',
    projectId:entry.projectId||'',
    description:entry.description||'Transaction',
    amount:Math.max(0,toNum(entry.amount,0))
  });
  if(companyTransactions.length>800)companyTransactions.length=800;
}

function currentActivityRows(limit=12){
  ensureCoreHistories();
  if(activityLog.length)return activityLog.slice(0,limit);
  return [
    {type:'seed',message:'System initialized',entityId:'',date:new Date().toISOString()},
  ];
}

// ============================================================
// QUOTES ENGINE
// ============================================================
function normalizeQuoteStatus(s){
  const allowed=['Draft','Sent','Accepted','Rejected','Amended'];
  return allowed.includes(s)?s:'Draft';
}
function quoteTotal(lines){
  return Array.isArray(lines)?lines.reduce((s,l)=>s+((Number(l.qty)||1)*(Number(l.unitPrice)||Number(l.price)||0)),0):0;
}
function renderQuotes(){
  const tbody=document.getElementById('qt-tbody');
  if(!tbody)return;
  updateQuoteKPIs();
  if(!quotes.length){
    tbody.innerHTML='<tr><td colspan="9" class="empty-state">No quotes yet. Create your first quote to get started.</td></tr>';
    return;
  }
  tbody.innerHTML=quotes.map(q=>{
    const tot=fmtShort(q.total||quoteTotal(q.lines));
    const proj=q.projectId?`<span class="status-badge badge-approved" style="cursor:pointer" onclick="openView('projects')">${q.projectId}</span>`:`<span style="color:var(--txt3);font-size:11px">—</span>`;
    const statusCls={Accepted:'badge-paid',Rejected:'badge-overdue',Sent:'badge-pending',Amended:'badge-partial',Draft:'badge-draft'}[q.status]||'badge-draft';
    return `<tr>
      <td><button class="link-btn" onclick="viewQuote('${q.id}')" style="font-weight:500;font-family:var(--font-mono);font-size:12px">${q.id}</button></td>
      <td style="font-size:12px">${q.customerName||''}</td>
      <td style="font-size:12px;max-width:220px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${q.description||''}</td>
      <td class="amount">${tot}</td>
      <td style="font-family:var(--font-mono);font-size:11px">${q.created||''}</td>
      <td style="font-family:var(--font-mono);font-size:11px">${q.validUntil||''}</td>
      <td><span class="status-badge ${statusCls}">${q.status}</span></td>
      <td>${proj}</td>
      <td><button class="row-menu-btn" onclick="rowMenu(this,'quote','${q.id}')">⋯</button></td>
    </tr>`;
  }).join('');
}
function updateQuoteKPIs(){
  const byStatus={Accepted:0,Rejected:0,Amended:0,Sent:0,Draft:0};
  const valByStatus={Accepted:0,Rejected:0,Amended:0,Sent:0,Draft:0};
  quotes.forEach(q=>{
    const st=q.status||'Draft';
    const tot=q.total||quoteTotal(q.lines);
    byStatus[st]=(byStatus[st]||0)+1;
    valByStatus[st]=(valByStatus[st]||0)+tot;
  });
  // Quotes view KPIs
  const setQ=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  setQ('qkpi-accepted-count',byStatus.Accepted);
  setQ('qkpi-accepted-val',fmtShort(valByStatus.Accepted)+' secured');
  setQ('qkpi-rejected-count',byStatus.Rejected);
  setQ('qkpi-rejected-val',fmtShort(valByStatus.Rejected)+' lost');
  setQ('qkpi-amended-count',byStatus.Amended);
  setQ('qkpi-amended-val',fmtShort(valByStatus.Amended)+' under revision');
  setQ('qkpi-sent-count',(byStatus.Sent||0)+(byStatus.Draft||0));
  setQ('qkpi-sent-val',fmtShort((valByStatus.Sent||0)+(valByStatus.Draft||0))+' in pipeline');
  // Dashboard quote KPIs
  setQ('dash-qt-accepted',byStatus.Accepted);
  setQ('dash-qt-accepted-val',fmtShort(valByStatus.Accepted));
  setQ('dash-qt-rejected',byStatus.Rejected);
  setQ('dash-qt-rejected-val',fmtShort(valByStatus.Rejected)+' lost');
  setQ('dash-qt-amended',byStatus.Amended);
  setQ('dash-qt-amended-val',fmtShort(valByStatus.Amended)+' in revision');
  const pipelineCount=(byStatus.Sent||0)+(byStatus.Draft||0);
  const pipelineVal=(valByStatus.Sent||0)+(valByStatus.Draft||0);
  setQ('dash-qt-pipeline',pipelineCount);
  setQ('dash-qt-pipeline-val',fmtShort(pipelineVal)+' potential');
  // Badge on nav
  const badge=document.getElementById('quotes-badge');
  if(badge){const open=(byStatus.Sent||0);badge.textContent=open>0?open:'';badge.style.display=open>0?'':'none';}
}
function qtFilter(){
  const sel=document.getElementById('qt-status-sel');
  const search=document.getElementById('qt-search');
  if(sel) _tbl.qt.status=sel.value;
  if(search) _tbl.qt.q=search.value.trim();
  _tbl.qt.page=1;
  renderQuotes();
}
function qtFilterClear(){
  const sel=document.getElementById('qt-status-sel');if(sel)sel.value='';
  const inp=document.getElementById('qt-search');if(inp)inp.value='';
  renderQuotes();
}
// ── quote line counter (like invLineCount)
let qtLineCount=0;
function _qtItemOptions(){
  const prodOpts=products.map(p=>`<option value="product|${p.id}|${p.unitPrice}" data-lbl="${p.name.replace(/"/g,"'")} [${p.sku}]" data-cost="${p.unitPrice}">📦 ${p.name} [${p.sku}]</option>`).join('');
  const svcOpts=services.map(s=>`<option value="service|${s.serviceCode||s.code}|${s.rate}" data-lbl="${s.name.replace(/"/g,"'")}" data-cost="${s.rate}">⚙ ${s.name} [${s.serviceCode||s.code}]</option>`).join('');
  return `<option value="">— select item or type custom —</option><optgroup label="Services">${svcOpts}</optgroup><optgroup label="Products">${prodOpts}</optgroup>`;
}
function addQuoteLine(){
  qtLineCount++;
  const id='ql'+qtLineCount;
  const row=document.createElement('div');
  row.id=id;
  row.className='line-card';
  row.innerHTML=`
    <div class="line-row"><label>Item (Product / Service)</label>
      <select onchange="onQtItemSel(this,'${id}')">${_qtItemOptions()}</select>
    </div>
    <div class="line-row"><label>Description (shown on quote)</label>
      <input type="text" id="${id}d" placeholder="Line description visible to client">
    </div>
    <div class="line-row" style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
      <div><label>Qty</label><input type="number" id="${id}q" value="1" min="0" oninput="calcQtLine('${id}')"></div>
      <div style="background:rgba(245,166,35,.07);border-radius:6px;padding:4px 6px">
        <label style="color:var(--amber);font-size:10px">🔒 Cost Price (R) — INTERNAL</label>
        <input type="number" id="${id}b" value="0" min="0" step="0.01" oninput="calcQtLine('${id}')" style="border-color:rgba(245,166,35,.4)">
      </div>
      <div style="background:rgba(245,166,35,.07);border-radius:6px;padding:4px 6px">
        <label style="color:var(--amber);font-size:10px">🔒 Markup % — INTERNAL</label>
        <input type="number" id="${id}m" value="25" min="0" max="100" oninput="calcQtLine('${id}')" style="border-color:rgba(245,166,35,.4)">
      </div>
      <div><label>Sell Price (R) — Client sees this</label><input type="number" id="${id}p" value="0" min="0" step="0.01" readonly style="color:var(--blue);font-weight:600"></div>
    </div>
    <div class="line-row" style="display:flex;align-items:center;justify-content:space-between">
      <div id="${id}t" class="line-total">R0.00</div>
      <button class="del-line" onclick="document.getElementById('${id}').remove();updateQtTotals()">Remove</button>
    </div>`;
  document.getElementById('qt-lines-body').appendChild(row);
}
function onQtItemSel(sel,id){
  const val=sel.value||'';
  const parts=val.split('|');
  if(parts.length<3)return;
  const cost=Number(parts[2])||0;
  const lbl=sel.options[sel.selectedIndex]?.getAttribute('data-lbl')||'';
  const descEl=document.getElementById(id+'d');
  if(lbl&&descEl&&!descEl.value)descEl.value=lbl;
  document.getElementById(id+'b').value=cost;
  // default markup from config
  const markup=Number(document.getElementById(id+'m')?.value||appConfig.maxMarkupPercent||25);
  document.getElementById(id+'m').value=markup;
  calcQtLine(id);
}
function calcQtLine(id){
  const qty=Number(document.getElementById(id+'q')?.value)||0;
  const cost=Number(document.getElementById(id+'b')?.value)||0;
  const maxMarkup=100;
  let markup=Number(document.getElementById(id+'m')?.value)||0;
  if(markup>maxMarkup){markup=maxMarkup;document.getElementById(id+'m').value=maxMarkup;}
  const sellUnit=Math.round(cost*(1+(markup/100))*100)/100;
  const sellEl=document.getElementById(id+'p');
  if(sellEl){sellEl.value=sellUnit;}
  const totalEl=document.getElementById(id+'t');
  if(totalEl)totalEl.textContent=fmt(qty*sellUnit);
  updateQtTotals();
}
function updateQtTotals(){
  let totalCost=0,totalSell=0,totalCostForMarkup=0;
  document.querySelectorAll('#qt-lines-body .line-card').forEach(r=>{
    const q=Number(r.querySelector('input[id$="q"]')?.value)||0;
    const cost=Number(r.querySelector('input[id$="b"]')?.value)||0;
    const sell=Number(r.querySelector('input[id$="p"]')?.value)||0;
    totalCost+=q*cost;
    totalSell+=q*sell;
    totalCostForMarkup+=q*cost;
  });
  const avgMarkup=totalCostForMarkup>0?Math.round(((totalSell-totalCostForMarkup)/totalCostForMarkup)*100):0;
  const setCost=document.getElementById('qt-calc-cost');if(setCost)setCost.textContent=fmt(totalCost);
  const setMkup=document.getElementById('qt-calc-markup');if(setMkup)setMkup.textContent=`${avgMarkup}%`;
  const setSub=document.getElementById('qt-calc-sub');if(setSub)setSub.textContent=fmt(totalSell);
  const setTot=document.getElementById('qt-total-display');if(setTot)setTot.textContent=fmt(totalSell);
}
// legacy alias kept in case anything calls it
function recalcQuoteTotal(){updateQtTotals();}
function openQuoteModal(id=null){
  const modal=document.getElementById('modal-quote');if(!modal)return;
  document.getElementById('qt-modal-title').textContent=id?'Edit Quote':'New Quote';
  document.getElementById('qt-modal-sub').textContent=id?'Update quote — internal costs & markup never shown to client':'Create a quote — internal costs & markup never shown to client';
  document.getElementById('qt-edit-id').value=id||'';
  const custSel=document.getElementById('qt-customer');
  if(custSel)custSel.innerHTML='<option value="">-- Select Customer --</option>'+customers.map(c=>`<option value="${c.customerCode}">${c.companyName}</option>`).join('');
  const q=id?quotes.find(x=>x.id===id):null;
  // Reset line body
  const body=document.getElementById('qt-lines-body');
  if(body)body.innerHTML='';
  qtLineCount=0;
  if(q){
    document.getElementById('qt-description').value=q.description||'';
    if(custSel)custSel.value=q.customerCode||'';
    document.getElementById('qt-status').value=q.status||'Draft';
    document.getElementById('qt-created').value=q.created||todayISO();
    document.getElementById('qt-valid-until').value=q.validUntil||'';
    document.getElementById('qt-notes').value=q.notes||'';
    const invType=document.getElementById('qt-inv-type');if(invType)invType.value=q.invoiceType||'Progress';
    (q.lines||[]).forEach(l=>{
      addQuoteLine();
      const rowId='ql'+qtLineCount;
      const descEl=document.getElementById(rowId+'d');if(descEl)descEl.value=l.description||'';
      const qEl=document.getElementById(rowId+'q');if(qEl)qEl.value=l.qty||1;
      const bEl=document.getElementById(rowId+'b');if(bEl)bEl.value=l.costPrice||l.price||0;
      const mEl=document.getElementById(rowId+'m');if(mEl)mEl.value=l.markupPct!==undefined?l.markupPct:25;
      calcQtLine(rowId);
    });
  }else{
    document.getElementById('qt-description').value='';
    if(custSel)custSel.value='';
    document.getElementById('qt-status').value='Draft';
    document.getElementById('qt-created').value=todayISO();
    const validDate=new Date();validDate.setDate(validDate.getDate()+30);
    document.getElementById('qt-valid-until').value=validDate.toISOString().slice(0,10);
    document.getElementById('qt-notes').value='';
    const invType=document.getElementById('qt-inv-type');if(invType)invType.value='Progress';
    addQuoteLine();
  }
  updateQtTotals();
  openModal('modal-quote');
}
function onQuoteCustomerChange(){}
function createQuoteFromForm(){
  const editId=document.getElementById('qt-edit-id').value;
  const description=document.getElementById('qt-description').value.trim();
  const customerCode=document.getElementById('qt-customer').value;
  if(!description){nxNotify({title:'Quote description is required',type:'error'});return;}
  if(!customerCode){nxNotify({title:'Please select a customer',type:'error'});return;}
  const customer=customers.find(c=>c.customerCode===customerCode);
  const status=document.getElementById('qt-status').value||'Draft';
  const created=document.getElementById('qt-created').value||todayISO();
  const validUntil=document.getElementById('qt-valid-until').value||'';
  const notes=document.getElementById('qt-notes').value.trim()||'';
  const invoiceType=document.getElementById('qt-inv-type')?.value||'Progress';
  // collect lines from the rich line-cards
  const lines=[];
  document.querySelectorAll('#qt-lines-body .line-card').forEach(r=>{
    const desc=r.querySelector('input[id$="d"]')?.value.trim()||'';
    if(!desc)return;
    const qty=Number(r.querySelector('input[id$="q"]')?.value)||0;
    const costPrice=Number(r.querySelector('input[id$="b"]')?.value)||0;
    const markupPct=Number(r.querySelector('input[id$="m"]')?.value)||0;
    const unitPrice=Number(r.querySelector('input[id$="p"]')?.value)||0;
    // detect itemType from the select value
    const selVal=r.querySelector('select')?.value||'';
    const selParts=selVal.split('|');
    const itemType=selParts[0]||'custom';
    const itemId=selParts[1]||'';
    lines.push({description:desc,qty,costPrice,markupPct,unitPrice,price:unitPrice,total:qty*unitPrice,itemType,itemId});
  });
  if(!lines.length){nxNotify({title:'Add at least one line item',type:'error'});return;}
  const total=lines.reduce((s,l)=>s+(l.qty*(l.unitPrice||l.price||0)),0);
  if(editId){
    const idx=quotes.findIndex(q=>q.id===editId);
    if(idx>=0){
      const prev=quotes[idx];
      quotes[idx]={...prev,customerCode,customerName:customer?.companyName||'',description,lines,total,status,created,validUntil,notes};
      // if newly accepted, auto-create project
      if(status==='Accepted'&&prev.status!=='Accepted'&&!prev.projectId){
        _autoCreateProjectFromQuote(quotes[idx]);
      }
      addAudit('UPDATE','Quotes',`Updated ${editId}`);
      logActivity('task_updated',`Quote ${editId} updated`,editId);
    }
  }else{
    const year=new Date().getFullYear();
    const id=`QT-${year}-${String(quoteCounter).padStart(3,'0')}`;
    quoteCounter++;
    const newQuote={id,customerCode,customerName:customer?.companyName||'',description,lines,total,status,created,validUntil,notes,projectId:'',sentDate:status==='Sent'?todayISO():''};
    quotes.unshift(newQuote);
    if(status==='Accepted')_autoCreateProjectFromQuote(newQuote);
    addAudit('CREATE','Quotes',`Created ${id}`);
    logActivity('project_created',`Quote ${id} raised for ${customer?.companyName||'customer'}`,id);
  }
  triggerUpdate();
  closeModal('modal-quote');
  nxNotify({title:'Quote saved',type:'success'});
}
function _autoCreateProjectFromQuote(q){
  if(q.projectId)return;
  const year=new Date().getFullYear();
  const next=Math.max(0,...projects.map(p=>toNum(String(p.id||'').split('-').pop(),0)))+1;
  const projId=`PROJ-${year}-${String(next).padStart(3,'0')}`;
  const validUntilDate=q.validUntil?new Date(`${q.validUntil}T00:00:00`):new Date();
  const endDate=new Date(validUntilDate);endDate.setMonth(endDate.getMonth()+6);
  projects.unshift({
    id:projId,
    name:q.description,
    customerCode:q.customerCode,
    customerName:q.customerName,
    quoteId:q.id,
    site:'TBD',
    manager:currentUser?.name||'Unassigned',
    start:todayISO(),
    end:endDate.toISOString().slice(0,10),
    budget:q.total||0,
    actualCost:0,
    status:'Planned'
  });
  q.projectId=projId;
  addAudit('CREATE','Projects',`Auto-created ${projId} from quote ${q.id}`);
  logActivity('project_created',`Project ${projId} auto-created from accepted quote ${q.id}`,projId);
  nxNotify({title:'Project created',sub:`${projId} created from accepted quote`,type:'success'});
}
function acceptQuote(id){
  const q=quotes.find(x=>x.id===id);if(!q)return;
  if(q.status==='Accepted'){nxNotify({title:'Quote already accepted',type:'info'});return;}
  if(q.status==='Rejected'){nxNotify({title:'Cannot accept a rejected quote',type:'error'});return;}
  q.status='Accepted';
  q.sentDate=q.sentDate||todayISO();
  _autoCreateProjectFromQuote(q);
  addAudit('UPDATE','Quotes',`Quote ${id} accepted`);
  logActivity('task_updated',`Quote ${id} accepted – project auto-created`,id);
  triggerUpdate();
  nxNotify({title:'Quote Accepted',sub:'Project has been created automatically',type:'success'});
}
function rejectQuote(id){
  const q=quotes.find(x=>x.id===id);if(!q)return;
  if(q.status==='Accepted'){nxNotify({title:'Cannot reject an already accepted quote',type:'error'});return;}
  q.status='Rejected';
  addAudit('UPDATE','Quotes',`Quote ${id} rejected`);
  logActivity('task_updated',`Quote ${id} rejected`,id);
  triggerUpdate();
  nxNotify({title:'Quote Rejected',type:'info'});
}
function amendQuote(id){
  const q=quotes.find(x=>x.id===id);if(!q)return;
  q.status='Amended';
  addAudit('UPDATE','Quotes',`Quote ${id} marked as amended`);
  triggerUpdate();
  openQuoteModal(id);
}
function sendQuote(id){
  const q=quotes.find(x=>x.id===id);if(!q)return;
  if(q.status==='Draft'){q.status='Sent';q.sentDate=todayISO();}
  addAudit('UPDATE','Quotes',`Quote ${id} sent to client`);
  logActivity('task_updated',`Quote ${id} sent to ${q.customerName}`,id);
  triggerUpdate();
  nxNotify({title:'Quote marked as Sent',type:'success'});
}
function editQuote(id){openQuoteModal(id);}
function deleteQuote(id){
  if(!confirm(`Delete quote ${id}? This cannot be undone.`))return;
  quotes=quotes.filter(q=>q.id!==id);
  addAudit('DELETE','Quotes',`Deleted quote ${id}`);
  triggerUpdate();
  nxNotify({title:'Quote deleted',type:'info'});
}
function viewQuote(id){
  const q=quotes.find(x=>x.id===id);if(!q)return;
  const lines=q.lines||[];
  const tot=q.total||quoteTotal(lines);
  const statusCls={Accepted:'badge-paid',Rejected:'badge-overdue',Sent:'badge-pending',Amended:'badge-partial',Draft:'badge-draft'}[q.status]||'badge-draft';
  const projLink=q.projectId?`<button class="link-btn" onclick="closeModal('modal-detail');openView('projects')">${q.projectId}</button>`:'<span style="color:var(--txt3)">No project yet</span>';

  // ── Client-facing line table (no cost/markup) ──
  const clientRows=lines.map(l=>{
    const up=Number(l.unitPrice)||Number(l.price)||0;
    const qty=Number(l.qty)||1;
    return `<tr><td style="font-size:12px">${l.description||'Item'}</td><td>${qty}</td><td class="amount">${fmt(up)}</td><td class="amount">${fmt(qty*up)}</td></tr>`;
  }).join('');
  const clientTable=`<div class="card" style="padding:0;margin-top:12px"><div class="table-wrap"><table>
    <thead><tr><th>Description</th><th>Qty</th><th>Unit Price</th><th>Line Total</th></tr></thead>
    <tbody>${clientRows||'<tr><td colspan="4" class="empty-state">No line items</td></tr>'}</tbody>
  </table></div></div>`;

  // ── Internal margin analysis (🔒 never visible to client) ──
  let totalCost=0,totalRevenue=0;
  const marginRows=lines.map(l=>{
    const qty=Number(l.qty)||1;
    const up=Number(l.unitPrice)||Number(l.price)||0;
    const cp=Number(l.costPrice)||0;
    const markup=Number(l.markupPct)||0;
    const lineRev=qty*up;
    const lineCost=qty*cp;
    const lineMargin=lineRev-lineCost;
    const marginPct=lineCost>0?((lineMargin/lineCost)*100):0;
    totalCost+=lineCost; totalRevenue+=lineRev;
    return `<tr>
      <td style="font-size:11px">${l.description||'Item'}</td>
      <td class="amount" style="color:var(--amber);font-size:11px">${fmt(cp)}</td>
      <td style="font-family:var(--font-mono);font-size:11px;text-align:center">${markup}%</td>
      <td class="amount" style="font-size:11px">${fmt(up)}</td>
      <td class="amount" style="color:var(--green);font-size:11px">${fmt(lineMargin)}</td>
      <td style="font-family:var(--font-mono);font-size:11px;text-align:center;color:${marginPct>=25?'var(--green)':marginPct>=15?'var(--amber)':'var(--red)'}">${marginPct.toFixed(1)}%</td>
    </tr>`;
  }).join('');
  const totalMargin=totalRevenue-totalCost;
  const totalMarginPct=totalCost>0?((totalMargin/totalCost)*100):0;
  const marginTable=`
    <div style="margin-top:16px;padding:10px 12px;background:rgba(245,166,35,0.06);border:1px solid rgba(245,166,35,0.25);border-radius:8px">
      <div style="font-size:11px;font-weight:600;color:var(--amber);letter-spacing:.05em;margin-bottom:8px">🔒 INTERNAL MARGIN ANALYSIS — NOT VISIBLE TO CLIENT</div>
      <div class="table-wrap"><table>
        <thead><tr><th>Line</th><th>Cost Price</th><th>Markup%</th><th>Sell Price</th><th>Gross Margin</th><th>Margin%</th></tr></thead>
        <tbody>${marginRows||'<tr><td colspan="6" class="empty-state">No lines</td></tr>'}</tbody>
        <tfoot><tr style="border-top:2px solid var(--border);font-weight:600">
          <td>TOTAL</td>
          <td class="amount" style="color:var(--amber)">${fmt(totalCost)}</td>
          <td></td>
          <td class="amount">${fmt(totalRevenue)}</td>
          <td class="amount" style="color:var(--green)">${fmt(totalMargin)}</td>
          <td style="font-family:var(--font-mono);text-align:center;color:${totalMarginPct>=25?'var(--green)':totalMarginPct>=15?'var(--amber)':'var(--red)'}">${totalMarginPct.toFixed(1)}%</td>
        </tr></tfoot>
      </table></div>
    </div>`;

  // ── Action buttons ──
  const actions=[];
  if(q.status==='Accepted'){
    actions.push(`<button class="btn-primary btn" onclick="closeModal('modal-detail');convertQuoteToInvoice('${id}')">🧾 Convert to Invoice</button>`);
  }
  if(q.status!=='Accepted'&&q.status!=='Rejected')actions.push(`<button class="btn-primary btn" onclick="closeModal('modal-detail');acceptQuote('${id}')">✓ Accept Quote</button>`);
  if(q.status==='Draft'||q.status==='Sent')actions.push(`<button class="btn" onclick="closeModal('modal-detail');rejectQuote('${id}')">✗ Reject</button>`);
  if(q.status!=='Accepted'&&q.status!=='Rejected')actions.push(`<button class="btn" onclick="closeModal('modal-detail');amendQuote('${id}')">⟳ Amend</button>`);
  if(q.status==='Draft')actions.push(`<button class="btn" onclick="closeModal('modal-detail');sendQuote('${id}')">↗ Send</button>`);
  actions.push(`<button class="btn" onclick="closeModal('modal-detail');editQuote('${id}')">✎ Edit</button>`);

  openDetailModal(
    `Quote ${q.id}`,
    `<span class="status-badge ${statusCls}">${q.status}</span> &nbsp; ${q.customerName||''}`,
    `<div class="detail-row"><span class="detail-label">Description</span><span>${q.description||''}</span></div>
     <div class="detail-row"><span class="detail-label">Total Value (quoted)</span><span class="amount" style="font-size:15px;font-weight:600">${fmt(tot)}</span></div>
     <div class="detail-row"><span class="detail-label">Created</span><span>${q.created||'—'}</span></div>
     <div class="detail-row"><span class="detail-label">Valid Until</span><span>${q.validUntil||'—'}</span></div>
     <div class="detail-row"><span class="detail-label">Sent Date</span><span>${q.sentDate||'—'}</span></div>
     <div class="detail-row"><span class="detail-label">Linked Project</span><span>${projLink}</span></div>
     ${q.notes?`<div class="detail-row"><span class="detail-label">Notes</span><span style="font-size:12px;color:var(--txt2)">${q.notes}</span></div>`:''}
     ${clientTable}
     ${marginTable}`,
    actions.join(' ')
  );
}

function convertQuoteToInvoice(quoteId){
  const q=quotes.find(x=>x.id===quoteId);
  if(!q){nxNotify({title:'Quote not found',type:'error'});return;}
  if(q.status!=='Accepted'){nxNotify({title:'Only accepted quotes can be converted to invoices',type:'error'});return;}
  // Reset and open the invoice modal
  editState={type:null,id:null};
  syncAllDropdowns();
  // Set customer
  const custSel=document.getElementById('inv-customer');
  if(custSel){custSel.value=q.customerCode||'';onInvoiceCustomerChange();}
  // Set project — wait for dropdown to populate
  setTimeout(()=>{
    const projSel=document.getElementById('inv-project');
    if(projSel&&q.projectId){projSel.value=q.projectId;}
    // Dates: today issued, +30 days due
    const today=new Date();
    const due=new Date(today);due.setDate(due.getDate()+30);
    const toISO=d=>d.toISOString().slice(0,10);
    document.getElementById('inv-issued').value=toISO(today);
    document.getElementById('inv-due').value=toISO(due);
    // Clear existing lines and populate from quote (sell prices ONLY — cost/markup never passed)
    document.getElementById('inv-lines-body').innerHTML='';invLineCount=0;
    (q.lines||[]).forEach(l=>{
      addInvLine();
      const row=document.querySelector('#inv-lines-body .line-card:last-child');
      if(row){
        // Description
        row.querySelector('input[id$="d"]').value=l.description||'';
        // Qty
        row.querySelector('input[id$="q"]').value=Number(l.qty)||1;
        // Base price = sell price (unitPrice) — this is what client sees, no internal cost leaked
        const sellPrice=Number(l.unitPrice)||Number(l.price)||0;
        const bInp=row.querySelector('input[id$="b"]');
        const mInp=row.querySelector('input[id$="m"]');
        const pInp=row.querySelector('input[id$="p"]');
        if(bInp)bInp.value=sellPrice;
        if(mInp)mInp.value=0; // markup on invoice is 0 — sell price already set
        if(pInp)pInp.value=sellPrice;
        // Trigger recalc for the line total display
        const rowId=row.id;
        calcInvLine(rowId);
      }
    });
    updateInvTotals();
    document.querySelector('#modal-invoice .modal-title').textContent=`Invoice from Quote ${quoteId}`;
    document.querySelector('#modal-invoice .btn-primary').textContent='Create Invoice';
    openModal('modal-invoice');
    nxNotify({title:`Quote ${quoteId} loaded into invoice`,sub:'Review and adjust before saving',type:'info'});
  },50);
}

function triggerUpdate(opts={}){
  const options={persist:true,refreshCharts:false,...opts};
  const _safe=(fn,name)=>{try{fn();}catch(e){console.warn('[triggerUpdate] '+name+' failed:',e);}};
  _safe(syncDocumentTransactions,'syncDocumentTransactions');
  _safe(syncStatementFromInvoices,'syncStatementFromInvoices');
  _safe(recalcCustomerBalances,'recalcCustomerBalances');
  _safe(recalcProjectFinancials,'recalcProjectFinancials');
  _safe(renderCustomers,'renderCustomers');
  _safe(renderSuppliers,'renderSuppliers');
  _safe(renderProjects,'renderProjects');
  _safe(renderProducts,'renderProducts');
  _safe(renderServices,'renderServices');
  _safe(renderInvoices,'renderInvoices');
  _safe(renderPOs,'renderPOs');
  _safe(renderQuotes,'renderQuotes');
  _safe(renderStatements,'renderStatements');
  _safe(renderTransactions,'renderTransactions');
  _safe(updateDashboard,'updateDashboard');
  _safe(updateRecentActivity,'updateRecentActivity');
  _safe(updateAnalytics,'updateAnalytics');
  _safe(renderTracking,'renderTracking');
  _safe(renderAdminUsers,'renderAdminUsers');
  _safe(renderRBAC,'renderRBAC');
  _safe(renderAuditLog,'renderAuditLog');
  _safe(renderNotifications,'renderNotifications');
  _safe(syncAllDropdowns,'syncAllDropdowns');
  if(options.refreshCharts)refreshChartsFromAjax(true);
  if(options.persist){try{persistState();}catch(e){console.warn('[triggerUpdate] persistState failed:',e);}}
}

// ============================================================
// RENDER TABLES
// ============================================================
function renderCustomers(){
  const tbody=document.getElementById('cust-tbody');
  if(!customers.length){
    tbody.innerHTML='<tr><td colspan="6" class="empty-state">No customers yet. Use Add Customer to create one.</td></tr>';
    return;
  }
  tbody.innerHTML=customers.map(c=>`<tr data-seg="${c.industry}">
    <td><button class="link-btn" onclick="viewCustomer('${c.customerCode}')" style="font-weight:500;text-align:left;display:block">${c.companyName}</button><div style="font-size:11px;color:var(--txt2);font-family:var(--font-mono)">${c.customerCode}</div></td>
    <td><span class="status-badge ${c.industry==='Mining'?'badge-approved':c.industry==='Engineering'?'badge-received':'badge-partial'}">${c.industry}</span></td>
    <td class="amount">${fmt(c.creditLimit)}</td>
    <td class="amount ${c.currentBalance>0?'negative':''}">${fmt(c.currentBalance)}</td>
    <td><span class="status-badge ${bc(c.status)}">${c.status}</span></td>
    <td><button class="row-menu-btn" onclick="rowMenu(this,'customer','${c.customerCode}')">⋯</button></td>
  </tr>`).join('');
}

function renderSuppliers(){
  const tbody=document.getElementById('sup-tbody');
  if(!suppliers.length){
    tbody.innerHTML='<tr><td colspan="6" class="empty-state">No suppliers yet. Add a supplier to enable products and POs.</td></tr>';
    return;
  }
  tbody.innerHTML=suppliers.map(s=>`<tr data-cat="${s.category}">
    <td><button class="link-btn" onclick="viewSupplier('${s.supplierCode}')" style="font-weight:500;text-align:left">${s.companyName}</button><div style="font-size:11px;color:var(--txt2);font-family:var(--font-mono)">${s.supplierCode}</div></td>
    <td><span class="status-badge badge-draft" style="font-size:10px">${s.category}</span></td>
    <td style="font-family:var(--font-mono);font-size:12px">${s.leadTime} days</td>
    <td class="amount">${fmt(s.spend)}</td>
    <td><span class="status-badge ${bc(s.status)}">${s.status}</span></td>
    <td><button class="row-menu-btn" onclick="rowMenu(this,'supplier','${s.supplierCode}')">⋯</button></td>
  </tr>`).join('');
}

function renderProducts(){
  const tb=document.getElementById('prod-tbody');if(!tb)return;
  if(!products.length){
    tb.innerHTML='<tr><td colspan="6" class="empty-state">No products yet. Add a product and link it to a supplier.</td></tr>';
    return;
  }
  tb.innerHTML=products.map(p=>`<tr data-category="${p.category}">
    <td><button class="link-btn" onclick="viewProduct('${p.id}')" style="font-weight:500;text-align:left;display:block">${p.name}</button><div style="font-family:var(--font-mono);font-size:11px;color:var(--txt2)">${p.sku}</div></td>
    <td><span class="status-badge badge-draft" style="font-size:10px">${p.category}</span></td>
    <td style="font-size:11px;color:var(--txt1)">${p.supplierName||p.supplier}</td>
    <td style="font-family:var(--font-mono);font-size:12px;color:${p.stock<=p.reorder?'var(--amber)':'var(--txt1)'}">${p.stock}</td>
    <td><span class="status-badge ${bc(p.status)}">${p.status}</span></td>
    <td><button class="row-menu-btn" onclick="rowMenu(this,'product','${p.id}')">⋯</button></td>
  </tr>`).join('');
}

function renderServices(){
  const tb=document.getElementById('svc-tbody');if(!tb)return;
  if(!services.length){
    tb.innerHTML='<tr><td colspan="9" class="empty-state">No services yet. Use Add Service to create one.</td></tr>';
    return;
  }
  tb.innerHTML=services.map(s=>`<tr data-category="${s.category}">
    <td style="font-family:var(--font-mono);font-size:11px;color:var(--txt2)">${s.code}</td>
    <td><div style="font-weight:500">${s.name}</div></td>
    <td><span class="status-badge badge-received" style="font-size:10px">${s.category}</span></td>
    <td style="font-size:11px;color:var(--txt1)">${String(s.rateType||'').toUpperCase()}</td>
    <td class="amount">${fmt(s.rate)}</td>
    <td style="font-size:11px;color:var(--txt2);font-family:var(--font-mono)">${s.unit}</td>
    <td style="font-size:11px;color:var(--txt2)">${s.supplier||'N/A'}</td>
    <td><span class="status-badge ${bc(s.status)}">${s.status}</span></td>
    <td><button class="row-menu-btn" onclick="rowMenu(this,'service','${s.code}')">⋯</button></td>
  </tr>`).join('');
}

function renderInvoices(){
  const tb=document.getElementById('inv-tbody');
  if(!tb)return;
  if(!invoices.length){
    tb.innerHTML='<tr><td colspan="11" class="empty-state">No invoices yet. Use New Invoice to create your first invoice.</td></tr>';
    return;
  }
  tb.innerHTML=invoices.map(i=>{
    const bal=Math.max(0,i.amount-i.paid);
    const pct=i.amount>0?Math.min(100,Math.round((i.paid/i.amount)*100)):0;
    const cust=customers.find(c=>c.customerCode===i.customerCode||c.companyName===(i.customerName||i.customer));
    const barColor=pct>=100?'var(--green)':pct>0?'var(--amber)':'var(--border2)';
    const settleBtn=bal>0?`<button class="settle-btn" onclick="settleInvoice('${i.id}')" title="Settle ${fmt(bal)} outstanding">Settle</button>`:'';
    return`<tr data-status="${i.status}" data-issued="${i.issued||''}">
    <td><button class="link-btn" onclick="viewInvoice('${i.id}')" style="font-family:var(--font-mono);font-size:12px;color:var(--blue)">${i.id}</button></td>
    <td>${cust?`<button class="link-btn" onclick="viewCustomer('${cust.customerCode}')">${i.customerName||i.customer}</button>`:(i.customerName||i.customer)}</td>
    <td style="font-size:11px;color:var(--txt2)">${i.projectName||'Unlinked'}</td>
    <td style="font-family:var(--font-mono);font-size:11px">${i.issued}</td>
    <td style="font-family:var(--font-mono);font-size:11px;color:${i.status==='Overdue'?'var(--red)':'inherit'}">${i.due}</td>
    <td class="amount">${fmt(i.amount)}</td>
    <td class="amount">
      <div style="font-weight:500;color:${i.paid>0?'var(--green)':'var(--txt3)'}">${fmt(i.paid)}</div>
      <div class="pay-bar-wrap"><div class="pay-bar-fill" style="width:${pct}%;background:${barColor}"></div></div>
      <div style="font-size:9px;color:var(--txt3);font-family:var(--font-mono)">${pct}% paid</div>
    </td>
    <td class="amount ${bal>0?'negative':''}">${fmt(bal)}</td>
    <td><span class="status-badge ${bc(i.status)}">${i.status}</span></td>
    <td style="white-space:nowrap">${settleBtn}<button class="row-menu-btn" onclick="rowMenu(this,'invoice','${i.id}')">⋯</button></td></tr>`;
  }).join('');
}

function settleInvoice(id){
  const inv=invoices.find(x=>x.id===id);if(!inv)return;
  const remaining=Math.max(0,inv.amount-inv.paid);
  if(remaining<=0){nxNotify({title:'Invoice already fully settled',type:'info'});return;}
  inv.paid=Math.round((inv.paid+remaining)*100)/100;
  inv.status=computeInvoiceStatus(inv);
  addPaymentStatement(inv,remaining,'Settled via Settle button');
  recordCompanyTransaction({
    date:todayISO(),
    ref:`PAY-${inv.id}`,
    type:'Inflow',
    category:'Customer Payment',
    party:inv.customerName||inv.customer||'',
    customerCode:inv.customerCode||'',
    supplierCode:'',
    projectId:inv.projectId||'',
    description:`Settlement – ${inv.id}`,
    amount:remaining
  });
  logActivity('payment_received',`Invoice ${inv.id} settled in full – ${fmt(remaining)}`,inv.id);
  addAudit('PAYMENT','Invoices',`Invoice ${inv.id} settled – ${fmt(remaining)}`);
  nxNotify({title:'Invoice Settled ✓',sub:`${inv.id} · ${fmt(remaining)} received`,type:'success'});
  triggerUpdate();
}

function renderProjects(){
  const tb=document.getElementById('proj-tbody');
  if(!tb)return;
  if(!projects.length){
    tb.innerHTML='<tr><td colspan="7" class="empty-state">No projects yet. Add a project to link procurement and invoicing.</td></tr>';
    return;
  }
  tb.innerHTML=projects.map(p=>`<tr data-status="${p.status}">
    <td><div style="font-weight:500">${p.name}</div><div style="font-size:11px;color:var(--txt2);font-family:var(--font-mono)">${p.id}</div></td>
    <td>${p.customerName||'Unassigned'}</td>
    <td>${p.site||'N/A'}</td>
    <td class="amount">${fmt(p.budget)}</td>
    <td class="amount">${fmt(p.actualCost)}</td>
    <td><span class="status-badge ${p.status==='Completed'?'badge-paid':p.status==='In Progress'?'badge-pending':p.status==='On Hold'?'badge-onhold':'badge-draft'}">${p.status}</span></td>
    <td><button class="row-menu-btn" onclick="rowMenu(this,'project','${p.id}','${p.status}')">⋯</button></td>
  </tr>`).join('');
}

function renderRBAC(){
  const tb=document.getElementById('rbac-tbody');
  if(!tb)return;
  const rows=Object.entries(rbacPermissions).map(([key,row])=>{
    const mk=(role)=>`<input type="checkbox" ${row.roles[role]?'checked':''} onchange="togglePermission('${key}','${role}',this.checked)">`;
    return `<tr><td>${row.label}</td><td>${mk('Admin')}</td><td>${mk('Manager')}</td><td>${mk('Finance')}</td></tr>`;
  }).join('');
  tb.innerHTML=rows||'<tr><td colspan="4" class="empty-state">No permissions configured</td></tr>';
}

function renderAuditLog(){
  const tb=document.getElementById('audit-tbody');
  if(!tb)return;
  tb.innerHTML=auditLog.slice(0,120).map(a=>`<tr>
    <td style="font-family:var(--font-mono);font-size:11px">${a.ts}</td>
    <td>${a.user}</td>
    <td>${a.role}</td>
    <td style="font-family:var(--font-mono);font-size:11px">${a.action}</td>
    <td>${a.module}</td>
    <td style="font-size:12px">${a.detail}</td>
  </tr>`).join('')||'<tr><td colspan="6" class="empty-state">No audit activity yet</td></tr>';
}

function applyConfigToUI(){
  const vat=document.getElementById('cfg-vat-rate');
  const poVat=document.getElementById('cfg-po-vat-rate');
  const terms=document.getElementById('cfg-payment-terms');
  const max=document.getElementById('cfg-max-markup');
  const req=document.getElementById('cfg-require-project');
  if(vat)vat.value=appConfig.vatRate;
  if(poVat)poVat.value=appConfig.poVatRate;
  if(terms)terms.value=appConfig.defaultPaymentTerms;
  if(max)max.value=appConfig.maxMarkupPercent;
  if(req)req.value=appConfig.requireProjectLink?'yes':'no';
  const invVat=document.getElementById('inv-tax');
  if(invVat)invVat.value=appConfig.vatRate;
}

function renderPOs(){
  const tb=document.getElementById('po-tbody');
  if(!purchaseOrders.length){
    tb.innerHTML='<tr><td colspan="10" class="empty-state">No purchase orders yet. Use New PO to create your first order.</td></tr>';
    return;
  }
  tb.innerHTML=purchaseOrders.map(p=>{
    const outstanding=Math.max(0,p.value-p.received);
    const pct=p.value>0?Math.min(100,Math.round((p.received/p.value)*100)):0;
    const sup=suppliers.find(s=>s.supplierCode===p.supplierCode||s.companyName===(p.supplierName||p.supplier));
    const barColor=pct>=100?'var(--green)':pct>0?'var(--amber)':'var(--border2)';
    const settleBtn=outstanding>0?`<button class="settle-btn settle-po" onclick="settlePO('${p.id}')" title="Pay ${fmt(outstanding)} to supplier">Settle</button>`:'';
    return`<tr data-status="${p.status}" data-ordered="${p.ordered||''}">
    <td><button class="link-btn" onclick="viewPO('${p.id}')" style="font-family:var(--font-mono);font-size:12px;color:var(--amber)">${p.id}</button></td>
    <td>${sup?`<button class="link-btn" onclick="viewSupplier('${sup.supplierCode}')">${p.supplierName||p.supplier}</button>`:(p.supplierName||p.supplier)}</td>
    <td style="font-size:11px;color:var(--txt2)">${p.projectName||'Unlinked'}</td>
    <td style="font-family:var(--font-mono);font-size:11px">${p.ordered}</td>
    <td style="font-family:var(--font-mono);font-size:11px">${p.expected}</td>
    <td class="amount">${fmt(p.value)}</td>
    <td class="amount">
      <div style="font-weight:500;color:${p.received>0?'var(--amber)':'var(--txt3)'}">${fmt(p.received)}</div>
      <div class="pay-bar-wrap"><div class="pay-bar-fill" style="width:${pct}%;background:${barColor}"></div></div>
      <div style="font-size:9px;color:var(--txt3);font-family:var(--font-mono)">${pct}% paid</div>
    </td>
    <td><span class="status-badge ${bc(p.status)}">${p.status}</span></td>
    <td style="white-space:nowrap">${settleBtn}<button class="row-menu-btn" onclick="rowMenu(this,'po','${p.id}')">⋯</button></td>
  </tr>`;}).join('');
}

function settlePO(id){
  const po=purchaseOrders.find(x=>x.id===id);if(!po)return;
  const outstanding=Math.max(0,po.value-po.received);
  if(outstanding<=0){nxNotify({title:'PO already fully settled',type:'info'});return;}
  po.received=Math.round((po.received+outstanding)*100)/100;
  po.status=computePOStatus(po);
  recordCompanyTransaction({
    date:todayISO(),
    ref:`RCPT-${po.id}`,
    type:'Outflow',
    category:'Procurement',
    party:po.supplierName||po.supplier||'',
    customerCode:'',
    supplierCode:po.supplierCode||'',
    projectId:po.projectId||'',
    description:`Full payment to supplier – ${po.id}`,
    amount:outstanding
  });
  logActivity('transaction_recorded',`PO ${po.id} settled – ${fmt(outstanding)} paid to supplier`,po.id);
  addAudit('PAYMENT','POs',`PO ${po.id} settled – ${fmt(outstanding)}`);
  nxNotify({title:'PO Settled ✓',sub:`${po.id} · ${fmt(outstanding)} paid`,type:'success'});
  triggerUpdate();
}

function getStatementPeriodFilter(){
  const sel=document.getElementById('stmt-period');
  return sel?sel.value||'':'';
}
function getStatementRowsByCustomer(customerCode){
  const selectedCustomer=customerCode?findCustomerByCode(customerCode):null;
  const selectedName=selectedCustomer?.companyName||'';
  const period=getStatementPeriodFilter(); // e.g. '2026-04' or '2026' or ''
  return statements
    .filter(s=>{
      // Customer filter
      const custMatch=(()=>{
        if(!customerCode)return true;
        // Check stored customerCode on statement row
        if(s.customerCode&&s.customerCode===customerCode)return true;
        const invoice=invoices.find(i=>i.id===s.ref||i.id===s.ref?.replace('PMT-',''));
        if(invoice?.customerCode===customerCode)return true;
        return String(s.desc||'').toLowerCase().includes(selectedName.toLowerCase());
      })();
      if(!custMatch)return false;
      // Period filter
      if(period){
        if(!s.date)return false;
        if(period.length===7)return s.date.startsWith(period);   // YYYY-MM
        if(period.length===4)return s.date.startsWith(period);   // YYYY
      }
      return true;
    })
    .sort((a,b)=>a.date.localeCompare(b.date));
}

function populateStatementPeriods(){
  const sel=document.getElementById('stmt-period');
  if(!sel)return;
  const current=sel.value;
  // Derive unique YYYY-MM periods from statements + invoices
  const periods=new Set();
  statements.forEach(s=>{if(s.date&&s.date.length>=7)periods.add(s.date.slice(0,7));});
  invoices.forEach(i=>{if(i.issued&&i.issued.length>=7)periods.add(i.issued.slice(0,7));});
  const sorted=[...periods].sort().reverse();
  sel.innerHTML='<option value="">All Periods</option>'+sorted.map(p=>{
    const[y,m]=p.split('-');
    const label=['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][parseInt(m,10)]+' '+y;
    return`<option value="${p}">${label}</option>`;
  }).join('');
  if(current)sel.value=current;
}

function renderStatementSummary(rows){
  const opening=0;
  const totalInvoiced=rows.reduce((sum,r)=>sum+(toNum(r.debit,0)>0?toNum(r.debit,0):0),0);
  const payments=rows.reduce((sum,r)=>sum+(toNum(r.credit,0)>0?toNum(r.credit,0):0),0);
  const credits=rows.filter(r=>String(r.ref||'').startsWith('CN-')).reduce((sum,r)=>sum+toNum(r.credit,0),0);
  const closing=opening+totalInvoiced-payments;
  const age={a0:0,a30:0,a60:0,a90:0};
  const today=new Date(`${todayISO()}T00:00:00`);
  rows.forEach(r=>{
    if(toNum(r.debit,0)<=0)return;
    const d=new Date(`${r.date}T00:00:00`);
    const days=Math.max(0,Math.floor((today-d)/86400000));
    if(days<=30)age.a0+=toNum(r.debit,0);
    else if(days<=60)age.a30+=toNum(r.debit,0);
    else if(days<=90)age.a60+=toNum(r.debit,0);
    else age.a90+=toNum(r.debit,0);
  });
  const ageTotal=Math.max(1,age.a0+age.a30+age.a60+age.a90);
  const setTxt=(id,val)=>{const el=document.getElementById(id);if(el)el.textContent=fmt(val);};
  const setBar=(id,val)=>{const el=document.getElementById(id);if(el)el.style.width=`${Math.round((val/ageTotal)*100)}%`;};
  setTxt('stmt-open-bal',opening);
  setTxt('stmt-total-invoiced',totalInvoiced);
  setTxt('stmt-total-payments',payments);
  setTxt('stmt-total-credits',credits);
  setTxt('stmt-close-bal',closing);
  setTxt('stmt-age-0-30',age.a0);
  setTxt('stmt-age-31-60',age.a30);
  setTxt('stmt-age-61-90',age.a60);
  setTxt('stmt-age-90',age.a90);
  setBar('stmt-age-bar-0-30',age.a0);
  setBar('stmt-age-bar-31-60',age.a30);
  setBar('stmt-age-bar-61-90',age.a60);
  setBar('stmt-age-bar-90',age.a90);
}

function renderStatements(){
  const tbody=document.getElementById('stmt-tbody');
  if(!tbody)return;
  populateStatementPeriods();
  const customerSel=document.getElementById('stmt-cust');
  const selectedName=customerSel?.value||'All Customers';
  const selectedCustomer=customers.find(c=>c.companyName===selectedName);
  const rows=getStatementRowsByCustomer(selectedCustomer?.customerCode||'');
  if(!rows.length){
    tbody.innerHTML='<tr><td colspan="9" class="empty-state">No statement entries for selected customer and period.</td></tr>';
    renderStatementSummary([]);
    return;
  }
  let running=0;
  const withBalance=rows.map(r=>{
    running+=toNum(r.debit,0)-toNum(r.credit,0);
    return {...r,bal:Math.max(0,running)};
  });
  tbody.innerHTML=withBalance.map(s=>{
    // If this row links to an invoice, show live outstanding
    const inv=invoices.find(i=>i.id===s.ref);
    const outstanding=inv?Math.max(0,inv.amount-inv.paid):null;
    const outstandingCell=outstanding!==null
      ?`<td class="amount ${outstanding>0?'negative':'positive'}" style="font-size:11px">${outstanding>0?fmt(outstanding):'✓ Paid'}</td>`
      :`<td style="color:var(--txt3);font-size:11px">&mdash;</td>`;
    return `<tr>
    <td style="font-family:var(--font-mono);font-size:11px">${s.date}</td>
    <td style="font-family:var(--font-mono);font-size:11px;color:var(--blue)">${s.ref}</td>
    <td style="font-size:12px">${s.desc}</td>
    <td class="amount ${s.debit>0?'negative':''}">${s.debit>0?fmt(s.debit):'&mdash;'}</td>
    <td class="amount ${s.credit>0?'positive':''}">${s.credit>0?fmt(s.credit):'&mdash;'}</td>
    <td class="amount">${fmt(s.bal)}</td>
    ${outstandingCell}
    <td><span class="status-badge ${bc(s.status)}">${s.status}</span></td>
    <td><button class="row-menu-btn" onclick="rowMenu(this,'statement','${s.ref}')">⋯</button></td>
  </tr>`;}).join('');
  renderStatementSummary(withBalance);
}

function getTransactionFilters(){
  return {
    from:document.getElementById('txn-from')?.value||'',
    to:document.getElementById('txn-to')?.value||'',
    year:document.getElementById('txn-year')?.value||'',
    quarter:document.getElementById('txn-quarter')?.value||'',
  };
}

let _txnBarChart=null, _txnDonutChart=null;
function renderTransactions(){
  const tbody=document.getElementById('txn-tbody');
  if(!tbody)return;
  ensureCoreHistories();
  const filters=getTransactionFilters();
  const rows=companyTransactions
    .filter(t=>matchDateFilters(t.date,filters))
    .sort((a,b)=>b.date.localeCompare(a.date));
  if(!rows.length){
    tbody.innerHTML='<tr><td colspan="9" class="empty-state">No company transactions in selected period.</td></tr>';
  }else{
    tbody.innerHTML=rows.map(t=>{
      const inflow=t.type==='Inflow'?toNum(t.amount,0):0;
      const outflow=t.type==='Outflow'?toNum(t.amount,0):0;
      const catBadge=t.category==='Customer Payment'?'badge-paid':t.category==='Procurement'?'badge-partial':t.category==='Payroll'?'badge-pending':'badge-draft';
      return `<tr>
        <td style="font-family:var(--font-mono);font-size:11px">${t.date}</td>
        <td style="font-family:var(--font-mono);font-size:11px;color:var(--blue)">${t.ref||t.id}</td>
        <td><span class="status-badge ${t.type==='Inflow'?'badge-paid':'badge-overdue'}">${t.type}</span></td>
        <td><span class="status-badge ${catBadge}" style="font-size:9px">${t.category||'—'}</span></td>
        <td>${t.party||'N/A'}</td>
        <td style="font-size:12px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.description||''}</td>
        <td class="amount positive">${inflow>0?fmt(inflow):'&mdash;'}</td>
        <td class="amount negative">${outflow>0?fmt(outflow):'&mdash;'}</td>
        <td><button class="row-menu-btn" onclick="rowMenu(this,'transaction','${t.id}')">⋯</button></td>
      </tr>`;
    }).join('');
  }
  // ── KPI summary ──
  const totalIn=rows.filter(r=>r.type==='Inflow').reduce((s,r)=>s+toNum(r.amount,0),0);
  const totalOut=rows.filter(r=>r.type==='Outflow').reduce((s,r)=>s+toNum(r.amount,0),0);
  const net=totalIn-totalOut;
  const outstandingAR=invoices.reduce((s,i)=>s+Math.max(0,toNum(i.amount,0)-toNum(i.paid,0)),0);
  const outstandingAP=purchaseOrders.reduce((s,p)=>s+Math.max(0,toNum(p.value,0)-toNum(p.received,0)),0);
  const setKpi=(id,val,color)=>{const el=document.getElementById(id);if(el){el.textContent=typeof val==='string'?val:fmt(val);if(color)el.style.color=color;}};
  setKpi('txn-kpi-inflow',totalIn,'var(--green)');
  setKpi('txn-kpi-outflow',totalOut,'var(--red)');
  setKpi('txn-kpi-net',net,net>=0?'var(--green)':'var(--red)');
  setKpi('txn-kpi-ar',outstandingAR,'var(--amber)');
  setKpi('txn-kpi-ap',outstandingAP,'var(--orange)');
  // ── Charts ──
  _renderTxnCharts(rows);
}

function _renderTxnCharts(rows){
  const barCanvas=document.getElementById('txnBarChart');
  const donutCanvas=document.getElementById('txnDonutChart');
  if(!barCanvas||!donutCanvas||typeof Chart==='undefined')return;

  // Monthly inflow vs outflow (last 12 months or filtered set)
  const monthMap={};
  rows.forEach(t=>{
    const mo=String(t.date||'').slice(0,7); // YYYY-MM
    if(!mo)return;
    if(!monthMap[mo])monthMap[mo]={in:0,out:0};
    if(t.type==='Inflow')monthMap[mo].in+=toNum(t.amount,0);
    else monthMap[mo].out+=toNum(t.amount,0);
  });
  const months=Object.keys(monthMap).sort();
  const moLabels=months.map(m=>{const[y,mo]=m.split('-');return['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][parseInt(mo,10)]+' '+y.slice(2);});
  if(_txnBarChart)_txnBarChart.destroy();
  _txnBarChart=new Chart(barCanvas,{
    type:'bar',
    data:{
      labels:moLabels,
      datasets:[
        {label:'Inflow',data:months.map(m=>monthMap[m].in),backgroundColor:'rgba(34,197,94,.7)',borderRadius:3},
        {label:'Outflow',data:months.map(m=>monthMap[m].out),backgroundColor:'rgba(239,68,68,.6)',borderRadius:3}
      ]
    },
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'top',labels:{font:{size:11},color:'#9ca3af'}}},scales:{x:{ticks:{color:'#9ca3af',font:{size:10}},grid:{color:'rgba(255,255,255,.05)'}},y:{ticks:{color:'#9ca3af',font:{size:10},callback:v=>fmtShort(v)},grid:{color:'rgba(255,255,255,.06)'}}}}
  });

  // Category donut
  const catTotals={};
  rows.forEach(t=>{
    const cat=t.category||'Other';
    catTotals[cat]=(catTotals[cat]||0)+toNum(t.amount,0);
  });
  const catLabels=Object.keys(catTotals);
  const catColors=['#4f8ef7','#22c55e','#f5a623','#a855f7','#ef4444','#14b8a6','#f97316'];
  if(_txnDonutChart)_txnDonutChart.destroy();
  _txnDonutChart=new Chart(donutCanvas,{
    type:'doughnut',
    data:{labels:catLabels,datasets:[{data:catLabels.map(c=>catTotals[c]),backgroundColor:catColors.slice(0,catLabels.length),borderWidth:2,borderColor:'rgba(0,0,0,.3)'}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'62%',plugins:{legend:{position:'bottom',labels:{font:{size:10},color:'#9ca3af',padding:8}}}}
  });
}

function clearTransactionFilters(){
  ['txn-from','txn-to','txn-year','txn-quarter'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  renderTransactions();
}

function renderAdminUsers(){
  const tb=document.getElementById('admin-users-tbody');
  if(!tb)return;
  tb.innerHTML=appUsers.map(u=>`<tr>
    <td><div style="font-weight:500">${u.name}</div><div style="font-size:11px;color:var(--txt2);font-family:var(--font-mono)">${u.id}</div></td>
    <td>${u.email}</td>
    <td>${u.role}</td>
    <td><span class="status-badge ${bc(u.status)}">${u.status}</span></td>
    <td style="font-family:var(--font-mono);font-size:11px">${u.lastLogin||'Never'}</td>
    <td><button class="row-menu-btn" onclick="rowMenu(this,'adminuser','${u.id}','${u.status}')">⋯</button></td>
  </tr>`).join('');
}

function togglePermission(key,role,enabled){
  if(!requirePermission('admin_config','Update RBAC permissions')){renderRBAC();return;}
  if(role==='Admin'&&!enabled){nxNotify({title:'Admin permissions cannot be fully disabled',type:'error'});renderRBAC();return;}
  if(!rbacPermissions[key])return;
  rbacPermissions[key].roles[role]=enabled;
  addAudit('UPDATE','RBAC',`Permission ${key} for ${role}: ${enabled?'Enabled':'Disabled'}`);
  renderRBAC();
  renderAuditLog();
  persistState();
}
function saveAppConfigFromForm(){
  if(!requirePermission('admin_config','Save finance configuration'))return;
  appConfig.vatRate=Math.max(0,toNum(document.getElementById('cfg-vat-rate')?.value,appConfig.vatRate));
  appConfig.poVatRate=Math.max(0,toNum(document.getElementById('cfg-po-vat-rate')?.value,appConfig.poVatRate));
  appConfig.defaultPaymentTerms=document.getElementById('cfg-payment-terms')?.value||appConfig.defaultPaymentTerms;
  appConfig.maxMarkupPercent=Math.max(0,toNum(document.getElementById('cfg-max-markup')?.value,appConfig.maxMarkupPercent));
  appConfig.requireProjectLink=(document.getElementById('cfg-require-project')?.value||'yes')==='yes';
  document.getElementById('inv-tax').value=appConfig.vatRate;
  updateInvTotals();
  updatePOTotals();
  addAudit('UPDATE','Config','Updated VAT/payment/markup settings');
  renderAuditLog();
  persistState();
  nxNotify({title:'Configuration saved',type:'success'});
}
async function clearAuditLog(){
  if(!requirePermission('admin_config','Clear audit log'))return;
  try{await nxConfirm({title:'Clear Audit Log',sub:'All log entries will be permanently erased.',okLabel:'Clear Log',icon:'x',okStyle:'background:var(--amber);color:#fff;border-color:var(--amber)'})}catch{return;}
  auditLog=[];
  addAudit('CLEAR','Audit','Audit log cleared');
  renderAuditLog();
  persistState();
}

// ═══════════════════════════════════════════════════════
// ACTIVITY FEED  –  rich rendering with entity links
// ═══════════════════════════════════════════════════════

const _ACT_UI = {
  invoice_created:     { icon:'📄', bg:'var(--blue-dim)',   label:'Invoice',     color:'var(--blue)'   },
  invoice_updated:     { icon:'✏️',  bg:'var(--blue-dim)',   label:'Invoice',     color:'var(--blue)'   },
  payment_received:    { icon:'💰', bg:'var(--green-dim)',  label:'Payment',     color:'var(--green)'  },
  transaction_recorded:{ icon:'💳', bg:'var(--teal-dim)',   label:'Transaction', color:'var(--teal)'   },
  task_updated:        { icon:'🔧', bg:'var(--amber-dim)',  label:'Task',        color:'var(--amber)'  },
  project_created:     { icon:'🏗️', bg:'var(--purple-dim)', label:'Project',     color:'var(--purple)' },
  po_created:          { icon:'📦', bg:'var(--amber-dim)',  label:'PO',          color:'var(--amber)'  },
  po_updated:          { icon:'📦', bg:'var(--amber-dim)',  label:'PO',          color:'var(--amber)'  },
  status_updated:      { icon:'🔄', bg:'var(--red-dim)',    label:'Status',      color:'var(--red)'    },
  note_added:          { icon:'📝', bg:'var(--purple-dim)', label:'Note',        color:'var(--purple)' },
  customer_created:    { icon:'👤', bg:'var(--blue-dim)',   label:'Customer',    color:'var(--blue)'   },
  supplier_created:    { icon:'🏦', bg:'var(--teal-dim)',   label:'Supplier',    color:'var(--teal)'   },
};

function _actTimeLabel(isoStr){
  if(!isoStr) return '';
  const d = new Date(isoStr);
  const now = new Date();
  const diffMs = now - d;
  const mins = Math.floor(diffMs / 60000);
  const hrs  = Math.floor(diffMs / 3600000);
  const days = Math.floor(diffMs / 86400000);
  if (mins < 1)  return 'just now';
  if (mins < 60) return `${mins}m ago`;
  if (hrs  < 24) return `${hrs}h ago`;
  if (days === 1) return 'Yesterday';
  if (days <  7)  return `${days}d ago`;
  return d.toLocaleDateString('en-ZA', { day:'numeric', month:'short' });
}

function _actFullTime(isoStr){
  if(!isoStr) return '';
  const d = new Date(isoStr);
  return d.toLocaleString('en-ZA', { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
}

function _actEntityLink(a){
  const id = a.entityId || '';
  if(!id) return '';
  if(id.startsWith('INV-'))  return `<span class="act-link" onclick="event.stopPropagation();viewInvoiceById('${id}')">${id}</span>`;
  if(id.startsWith('PO-'))   return `<span class="act-link" onclick="event.stopPropagation();viewPOById('${id}')">${id}</span>`;
  if(id.startsWith('PROJ-')) return `<span class="act-link" onclick="event.stopPropagation();viewProjectById('${id}')">${id}</span>`;
  if(id.startsWith('CUST-')) return `<span class="act-link" onclick="event.stopPropagation();viewCustomer('${id}')">${id}</span>`;
  if(id.startsWith('SUP-'))  return `<span class="act-link" onclick="event.stopPropagation();viewSupplier('${id}')">${id}</span>`;
  return '';
}

function _buildActivityRows(rows, showFull){
  if(!rows.length) return '<div style="padding:24px;text-align:center;color:var(--txt2);font-size:12px">No activity matches the current filters.</div>';
  return rows.map(a => {
    const ui = _ACT_UI[a.type] || { icon:'ℹ️', bg:'var(--bg3)', label:'Event', color:'var(--txt2)' };
    const link = _actEntityLink(a);
    const timeStr = showFull ? _actFullTime(a.date) : _actTimeLabel(a.date);
    return `<div class="activity-item" style="cursor:default;align-items:flex-start">
      <div class="act-icon" style="background:${ui.bg}">${ui.icon}</div>
      <div style="flex:1;min-width:0">
        <div class="act-text">${a.message}${link ? ' · ' + link : ''}</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:3px">
          <span class="act-time">${timeStr}</span>
          <span style="font-family:var(--font-mono);font-size:9px;padding:1px 6px;border-radius:3px;background:${ui.bg};color:${ui.color}">${ui.label}</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderActivity(){
  const feed = document.getElementById('activity-feed');
  if(!feed) return;
  const rows = currentActivityRows(8);
  feed.innerHTML = _buildActivityRows(rows, false);
}

function openActivityModal(){
  openModal('modal-activity');
  renderActivityModal();
}

function renderActivityModal(){
  const feed  = document.getElementById('act-modal-feed');
  const count = document.getElementById('act-modal-count');
  if(!feed) return;

  const search = (document.getElementById('act-search')?.value || '').toLowerCase();
  const type   =  document.getElementById('act-type-filter')?.value || '';
  const period =  document.getElementById('act-date-filter')?.value || '';

  const now   = new Date();
  const today = todayISO();
  const weekAgo  = new Date(now - 7  * 86400000).toISOString().slice(0,10);
  const monthAgo = new Date(now - 30 * 86400000).toISOString().slice(0,10);

  let rows = [...activityLog];

  if(type)   rows = rows.filter(a => a.type === type || (type === 'project_created' && ['project_created','customer_created','supplier_created'].includes(a.type)));
  if(search) rows = rows.filter(a => (a.message||'').toLowerCase().includes(search) || (a.entityId||'').toLowerCase().includes(search));
  if(period === 'today')  rows = rows.filter(a => String(a.date||'').slice(0,10) === today);
  if(period === 'week')   rows = rows.filter(a => String(a.date||'').slice(0,10) >= weekAgo);
  if(period === 'month')  rows = rows.filter(a => String(a.date||'').slice(0,10) >= monthAgo);

  if(count) count.textContent = `${rows.length} event${rows.length !== 1 ? 's' : ''} found`;
  feed.innerHTML = _buildActivityRows(rows.slice(0, 200), true);
}

function exportActivityLog(){
  const rows = activityLog;
  const csv  = ['Date,Type,Message,Entity ID']
    .concat(rows.map(a => [
      _actFullTime(a.date), a.type, '"' + (a.message||'').replace(/"/g,'""') + '"', a.entityId||''
    ].join(',')))
    .join('\n');
  const blob = new Blob([csv], { type:'text/csv' });
  const url  = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href  = url;
  link.download = `activity-log-${todayISO()}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  nxNotify({ title: 'Activity log exported', type: 'success' });
}

// Entity deep-link helpers (navigate + open detail)
function viewInvoiceById(id){
  closeModal('modal-activity');
  openView('invoices');
  setTimeout(() => {
    const inv = invoices.find(i => i.id === id);
    if(inv) viewInvoice(id);
  }, 80);
}
function viewPOById(id){
  closeModal('modal-activity');
  openView('purchase-orders');
  setTimeout(() => { viewPO(id); }, 80);
}
function viewProjectById(id){
  closeModal('modal-activity');
  openView('projects');
  setTimeout(() => {
    const proj = projects.find(p => p.id === id);
    if(proj) viewProject(id);
  }, 80);
}

// logActivity type enrichment is now inlined in the original function above

function updateRecentActivity(){ renderActivity(); }

function renderTopCustomers(dataOverride,elId){
  const id=elId||'top-cust-bars';
  const data=dataOverride||[
    {name:'Sibanye-Stillwater',val:892000},{name:'Implats Mine Ops',val:648000},
    {name:'Kumba Iron Ore',val:440000},{name:'WBHO Construction',val:412000},{name:'Exxaro Resources',val:285600},
  ];
  const max=Math.max(...data.map(d=>d.val),1);
  const el=document.getElementById(id);
  if(el)el.innerHTML=data.map(d=>`<div class="spark-row"><span class="spark-name">${d.name}</span><div class="spark-bar-bg"><div class="spark-bar" style="width:${Math.round((d.val/max)*100)}%"></div></div><span class="spark-val">${fmtShort(d.val)}</span></div>`).join('');
}

function renderNotifications(){
  document.getElementById('notif-list').innerHTML=notifications.map(n=>`
    <div class="activity-item" style="padding:10px 0"><div class="act-icon" style="background:var(--amber-dim);font-size:14px">${n.icon}</div><div class="act-text">${n.msg}</div></div>`).join('');
}

function updateDashboard(){
  const kpis=[...document.querySelectorAll('#view-dashboard .kpi')];
  if(!kpis.length)return;
  const revenue=invoices.reduce((sum,i)=>sum+toNum(i.amount,0),0);
  const collected=invoices.reduce((sum,i)=>sum+toNum(i.paid,0),0);
  const outstanding=Math.max(0,revenue-collected);
  const activeClients=customers.filter(c=>c.status==='Active').length;
  const openPOValue=purchaseOrders.filter(p=>!['Received'].includes(p.status)).reduce((sum,p)=>sum+toNum(p.value,0),0);
  const overdue=invoices.filter(i=>i.status==='Overdue').reduce((sum,i)=>sum+Math.max(0,toNum(i.amount,0)-toNum(i.paid,0)),0);
  const valuesByLabel={
    'Total Revenue':fmtShort(revenue),
    'Outstanding AR':fmtShort(outstanding),
    'Open POs':fmtShort(openPOValue),
    'Active Clients':String(activeClients),
    'Active Suppliers':String(suppliers.filter(s=>s.status==='Active').length),
    'Products Catalogued':String(products.length),
    'Services Offered':String(services.length),
    'Overdue Invoices':fmtShort(overdue),
  };
  const openPOCount=purchaseOrders.filter(p=>!['Received'].includes(p.status)).length;
  const overdueCount=invoices.filter(i=>i.status==='Overdue').length;
  const collectionPct=revenue>0?Math.round((collected/revenue)*100):0;
  const metaByLabel={
    'Total Revenue':{text:`${collectionPct}% collected`,cls:'up'},
    'Outstanding AR':{text:`${overdueCount} invoice${overdueCount!==1?'s':''} overdue`,cls:overdueCount>0?'dn':'up'},
    'Open POs':{text:`${openPOCount} order${openPOCount!==1?'s':''} active`,cls:''},
    'Active Clients':{text:`${customers.filter(c=>c.status==='Active').length} active accounts`,cls:'up'},
    'Active Suppliers':{text:`${suppliers.filter(s=>s.status==='Active').length} active`,cls:'up'},
    'Products Catalogued':{text:`${products.length} in catalogue`,cls:'up'},
    'Services Offered':{text:`${services.length} available`,cls:'up'},
    'Overdue Invoices':{text:overdueCount>0?`${overdueCount} require action`:'All current ✓',cls:overdueCount>0?'dn':'up'},
  };
  // Update page subtitle live when on dashboard
  const subEl=document.getElementById('page-sub');
  if(subEl&&document.querySelector('.nav-item[data-view="dashboard"].active')){
    try{subEl.innerHTML=_dashSubtitle();}catch(e){}
  }
  kpis.forEach(card=>{
    try{
      const label=card.querySelector('.kpi-label')?.textContent?.trim();
      const valueEl=card.querySelector('.kpi-value');
      if(label&&valueEl&&valuesByLabel[label]!==undefined)valueEl.textContent=valuesByLabel[label];
      const metaEl=card.querySelector('.kpi-meta');
      const m=metaByLabel[label];
      if(metaEl&&m){metaEl.innerHTML=`<span class="kpi-change ${m.cls}">${m.text}</span>`;}
    }catch(e){}
  });
  // Quote Analytics KPIs
  updateQuoteKPIs();
  // Cash Flow Board
  _updateCashFlowBoard();
  // Cash Flow Ledger preview
  _renderDashLedger();
  // Quote pipeline preview
  _renderDashQuotePipeline();
}

function _updateCashFlowBoard(){
  // Money In: sum of all customer payments (cash actually received)
  const moneyIn=companyTransactions.filter(t=>t.type==='Inflow'&&t.category==='Customer Payment').reduce((s,t)=>s+toNum(t.amount,0),0);
  // Money Out: sum of all supplier payments (cash actually paid)
  const moneyOut=companyTransactions.filter(t=>t.type==='Outflow'&&t.category==='Supplier Payment').reduce((s,t)=>s+toNum(t.amount,0),0);
  // Outstanding AR: unpaid customer invoices
  const outstandingAR=invoices.reduce((s,i)=>s+Math.max(0,toNum(i.amount,0)-toNum(i.paid,0)),0);
  // Outstanding AP: unreceived PO value (supplier commitments not yet settled)
  const outstandingAP=purchaseOrders.filter(p=>p.status!=='Received').reduce((s,p)=>s+Math.max(0,toNum(p.value,0)-toNum(p.received,0)),0);
  const set=(id,val)=>{const el=document.getElementById(id);if(el)el.textContent=val;};
  set('dash-cf-in',fmtShort(moneyIn));
  set('dash-cf-in-meta',`${payments.filter(p=>p.customerCode).length} customer payment${payments.filter(p=>p.customerCode).length!==1?'s':''}`);
  set('dash-cf-out',fmtShort(moneyOut));
  const outflowCount=companyTransactions.filter(t=>t.type==='Outflow'&&t.category==='Supplier Payment').length;
  set('dash-cf-out-meta',`${outflowCount} supplier payment${outflowCount!==1?'s':''}`);
  set('dash-cf-ar',fmtShort(outstandingAR));
  const unpaidInvCount=invoices.filter(i=>toNum(i.amount,0)>toNum(i.paid,0)).length;
  set('dash-cf-ar-meta',`${unpaidInvCount} unpaid invoice${unpaidInvCount!==1?'s':''}`);
  set('dash-cf-ap',fmtShort(outstandingAP));
  const openPOCt=purchaseOrders.filter(p=>p.status!=='Received').length;
  set('dash-cf-ap-meta',`${openPOCt} open PO${openPOCt!==1?'s':''}`);
}

function _renderDashLedger(){
  const el=document.getElementById('dash-ledger-table');if(!el)return;
  const recent=companyTransactions.slice(0,8);
  if(!recent.length){el.innerHTML='<div style="color:var(--txt3);font-size:12px;padding:12px">No cash transactions yet.</div>';return;}
  el.innerHTML=`<div class="table-wrap"><table>
    <thead><tr><th>Date</th><th>Party</th><th>Description</th><th>Type</th><th>Amount</th></tr></thead>
    <tbody>${recent.map(t=>{
      const cls=t.type==='Inflow'?'positive':'negative';
      const badge=t.type==='Inflow'?'badge-paid':'badge-overdue';
      return `<tr>
        <td style="font-family:var(--font-mono);font-size:11px">${t.date||''}</td>
        <td style="font-size:12px">${t.party||''}</td>
        <td style="font-size:11px;color:var(--txt2)">${t.description||''}</td>
        <td><span class="status-badge ${badge}" style="font-size:10px">${t.type==='Inflow'?'Cash In':'Cash Out'}</span></td>
        <td class="amount ${cls}">${fmt(toNum(t.amount,0))}</td>
      </tr>`;
    }).join('')}</tbody>
  </table></div>`;
}

function _renderDashQuotePipeline(){
  const el=document.getElementById('dash-quote-pipeline');if(!el)return;
  const open=quotes.filter(q=>q.status==='Sent'||q.status==='Amended').slice(0,6);
  if(!open.length){el.innerHTML='<div style="color:var(--txt3);font-size:12px;padding:12px">No open quotes in pipeline.</div>';return;}
  el.innerHTML=open.map(q=>{
    const tot=q.total||quoteTotal(q.lines);
    const statusCls={Sent:'badge-pending',Amended:'badge-partial'}[q.status]||'badge-draft';
    return `<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border1)">
      <div>
        <div style="font-size:12px;font-weight:500">${q.customerName}</div>
        <div style="font-size:11px;color:var(--txt2)">${q.id} · ${q.description?.slice(0,40)||''}${q.description?.length>40?'…':''}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:13px;font-weight:600;color:var(--txt1)">${fmtShort(tot)}</div>
        <span class="status-badge ${statusCls}" style="font-size:10px">${q.status}</span>
      </div>
    </div>`;
  }).join('');
}

// ================================================================
// ptkNavToInvoices – "View All" from customer detail
// ================================================================
function ptkNavToInvoices(customerCode, companyName){
  openView('invoices');
  setTimeout(()=>{
    const el=document.getElementById('inv-search');
    if(el){el.value=companyName;filterTable('inv-tbody','inv-search');el.style.borderColor='var(--blue)';setTimeout(()=>el.style.borderColor='',2500);}
    showToast('Showing invoices for '+companyName);
  },80);
}
function ptkNavToPOs(supplierCode, companyName){
  openView('purchase-orders');
  setTimeout(()=>{
    const el=document.getElementById('po-search');
    if(el){el.value=companyName;filterTable('po-tbody','po-search');el.style.borderColor='var(--amber)';setTimeout(()=>el.style.borderColor='',2500);}
    showToast('Showing POs for '+companyName);
  },80);
}
function ptkNavToProducts(supplierCode, companyName){
  openView('products');
  setTimeout(()=>{
    const el=document.getElementById('prod-search');
    if(el){el.value=companyName;filterCat('products');el.style.borderColor='var(--teal)';setTimeout(()=>el.style.borderColor='',2500);}
    showToast('Showing products for '+companyName);
  },80);
}

// ================================================================
// PROJECT TRACKING ENGINE
// ================================================================
let _ptkProj=null, _ptkTab='board', _ptkData={};

function _ptkDateOffset(base,days){
  if(!base)return new Date().toISOString().slice(0,10);
  const d=new Date(base+'T00:00:00');d.setDate(d.getDate()+days);return d.toISOString().slice(0,10);
}

function ptkGetData(pid){
  if(_ptkData[pid])return _ptkData[pid];
  const proj=findProjectById(pid);if(!proj){_ptkData[pid]={tasks:[],milestones:[],risks:[],resources:[]};return _ptkData[pid];}
  const pm=proj.manager||'Site Manager';
  const team=[pm,'Sipho Ndlovu','Lerato Mokoena','Grant Hendricks','Fatima Jacobs','Pierre Joubert'];
  _ptkData[pid]={
    tasks:[
      {id:'T-001',name:'Site preparation & demarcation',phase:'done',priority:'high',assignee:team[1],due:_ptkDateOffset(proj.start,7),pct:100,hours:32,desc:'Clear and peg the site footprint per approved drawings.'},
      {id:'T-002',name:'Foundation excavation & subgrade',phase:'done',priority:'high',assignee:team[2],due:_ptkDateOffset(proj.start,21),pct:100,hours:80,desc:'Bulk earthworks to design RL including subgrade compaction.'},
      {id:'T-003',name:'Concrete pour – ground floor slab',phase:'done',priority:'critical',assignee:team[3],due:_ptkDateOffset(proj.start,35),pct:100,hours:120,desc:'Cast ground floor slab. Ready-mix 40MPa.'},
      {id:'T-004',name:'Structural steel erection',phase:'inprogress',priority:'critical',assignee:team[1],due:_ptkDateOffset(proj.start,60),pct:62,hours:200,desc:'Erect primary steel columns and beams per structural drawings.'},
      {id:'T-005',name:'Electrical main board & reticulation',phase:'inprogress',priority:'high',assignee:team[4],due:_ptkDateOffset(proj.start,70),pct:35,hours:90,desc:'Install main DB, cable trays and MCC panel.'},
      {id:'T-006',name:'Ventilation ducting installation',phase:'inprogress',priority:'medium',assignee:team[2],due:_ptkDateOffset(proj.start,80),pct:20,hours:160,desc:'Install primary ventilation ducts per HVAC design.'},
      {id:'T-007',name:'Surface finishes – level 1',phase:'backlog',priority:'medium',assignee:team[3],due:_ptkDateOffset(proj.start,100),pct:0,hours:60,desc:'Screeding, tiling, painting to specification.'},
      {id:'T-008',name:'Commissioning & handover pack',phase:'backlog',priority:'high',assignee:pm,due:proj.end,pct:0,hours:40,desc:'Compile O&M manuals, as-builts and completion certificate.'},
    ],
    milestones:[
      {id:'MS-001',name:'Project Kick-off',date:proj.start,status:'achieved',desc:'All contracts signed, access granted, mobilisation complete.'},
      {id:'MS-002',name:'Design Freeze (IFC)',date:_ptkDateOffset(proj.start,14),status:'achieved',desc:'All drawings approved and issued for construction.'},
      {id:'MS-003',name:'Structural Steel Complete',date:_ptkDateOffset(proj.start,65),status:'at-risk',desc:'All structural steelwork erected, bolted and inspected.'},
      {id:'MS-004',name:'Practical Completion',date:_ptkDateOffset(proj.end,-30),status:'upcoming',desc:'All major works done, final defects list issued.'},
      {id:'MS-005',name:'Final Handover',date:proj.end,status:'upcoming',desc:'Signed completion certificate and retention release.'},
    ],
    risks:[
      {id:'R-001',title:'Rebar delivery delay (Macsteel)',type:'Risk',status:'open',likelihood:'High',impact:'Critical',owner:pm,desc:'Potential 2–3 week delay on Y16/Y20 rebar. Expedite PO and identify alternative supplier.'},
      {id:'R-002',title:'Adverse weather during concrete pours',type:'Risk',status:'mitigating',likelihood:'Medium',impact:'Medium',owner:team[3],desc:'Winter rains may delay external pours. Programme for morning slots, procure rain cover sheeting.'},
      {id:'R-003',title:'Scope creep – additional ventilation shaft',type:'Change Request',status:'open',likelihood:'High',impact:'High',owner:pm,desc:'Client requested addition of secondary ventilation shaft. Formal variation order required. Budget impact 0❌180K.'},
      {id:'R-004',title:'ABB switchgear lead time extended',type:'Risk',status:'mitigating',likelihood:'Medium',impact:'High',owner:team[4],desc:'ABB switchgear ETA pushed by 3 weeks. Reviewing alternative panel supplier.'},
      {id:'R-005',title:'Payment delay on progress claim #2',type:'Issue',status:'resolved',likelihood:'Low',impact:'Medium',owner:pm,desc:'Resolved after escalation – payment received 2026-04-18.'},
    ],
    resources:[
      {name:pm,role:'Project Manager',type:'Core Team',util:90,color:'#4f8ef7'},
      {name:team[1],role:'Site Foreman',type:'Core Team',util:100,color:'#22c55e'},
      {name:team[2],role:'Civil Engineer',type:'Core Team',util:75,color:'#a855f7'},
      {name:team[3],role:'Structural Engineer',type:'Sub-contractor',util:60,color:'#f5a623'},
      {name:team[4],role:'Electrical Supervisor',type:'Sub-contractor',util:80,color:'#ef4444'},
      {name:team[5],role:'Mechanical Engineer',type:'Consultant',util:40,color:'#14b8a6'},
    ],
  };
  return _ptkData[pid];
}

function ptkSyncDropdown(){
  const sel=document.getElementById('ptk-proj-sel');if(!sel)return;
  sel.innerHTML=projects.map(p=>`<option value="${p.id}">${p.name} (${p.id})</option>`).join('');
  if(!_ptkProj&&projects.length)_ptkProj=projects[0].id;
  if(_ptkProj)sel.value=_ptkProj;
}

function ptkOnProjectChange(){
  const sel=document.getElementById('ptk-proj-sel');
  if(sel)_ptkProj=sel.value;
  ptkRenderAll();
}

function ptkRenderAll(){
  const proj=findProjectById(_ptkProj);if(!proj)return;
  const d=ptkGetData(_ptkProj);
  const budgetUsed=proj.actualCost||0;const budgetTotal=proj.budget||1;
  const done=d.tasks.filter(t=>t.phase==='done').length;
  const progPct=d.tasks.length?Math.round((done/d.tasks.length)*100):0;
  const budgetPct=Math.round((budgetUsed/budgetTotal)*100);
  const openRisks=d.risks.filter(r=>r.status==='open');
  const hasCritical=openRisks.some(r=>r.impact==='Critical');
  const rag=hasCritical?'RED':(openRisks.length>2||budgetPct>90||progPct<40)?'AMBER':'GREEN';
  const ragColors={RED:'var(--red)',AMBER:'var(--amber)',GREEN:'var(--green)'};
  const ragBgs={RED:'rgba(239,68,68,.1)',AMBER:'rgba(245,166,35,.08)',GREEN:'rgba(34,197,94,.08)'};
  const ragBorders={RED:'rgba(239,68,68,.3)',AMBER:'rgba(245,166,35,.3)',GREEN:'rgba(34,197,94,.3)'};
  const ragEl=document.getElementById('ptk-rag');
  if(ragEl){ragEl.style.color=ragColors[rag];ragEl.style.background=ragBgs[rag];ragEl.style.borderColor=ragBorders[rag];}
  const dot=document.getElementById('ptk-rag-dot');if(dot)dot.style.background=ragColors[rag];
  const lbl=document.getElementById('ptk-rag-lbl');if(lbl)lbl.textContent='RAG: '+rag;
  const bu=document.getElementById('ptk-budget-used');if(bu)bu.textContent=fmt(budgetUsed);
  const bt=document.getElementById('ptk-budget-total');if(bt)bt.textContent=fmt(budgetTotal);
  const pg=document.getElementById('ptk-prog');if(pg)pg.textContent=progPct+'%';
  ptkRenderTab(_ptkTab);
}

function ptkSwitchTab(tab,btn){
  _ptkTab=tab;
  document.querySelectorAll('.ptk-tab').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  document.querySelectorAll('.ptk-panel').forEach(p=>p.style.display='none');
  const panel=document.getElementById('ptk-panel-'+tab);
  if(panel)panel.style.display='block';
  ptkRenderTab(tab);
}

function ptkRenderTab(tab){
  if(tab==='board')ptkRenderBoard();
  else if(tab==='gantt')ptkRenderGantt();
  else if(tab==='milestones')ptkRenderMilestones();
  else if(tab==='risks')ptkRenderRisks();
  else if(tab==='resources')ptkRenderResources();
}

function ptkRenderBoard(){
  const d=ptkGetData(_ptkProj);
  const board=document.getElementById('ptk-board');if(!board)return;
  const cols=[
    {key:'backlog',label:'Backlog',color:'var(--txt2)'},
    {key:'inprogress',label:'In Progress',color:'var(--blue)'},
    {key:'review',label:'Under Review',color:'var(--amber)'},
    {key:'done',label:'Done',color:'var(--green)'},
  ];
  board.innerHTML=cols.map(col=>{
    const tasks=d.tasks.filter(t=>t.phase===col.key);
    const today=todayISO();
    const cards=tasks.map(t=>{
      const dueClass=t.due<today&&t.phase!=='done'?'color:var(--red)':t.due<=_ptkDateOffset(today,3)?'color:var(--amber)':'color:var(--txt2)';
      return `<div class="ptk-card" draggable="true" data-task-id="${t.id}" onclick="ptkViewTask('${t.id}')" ondragstart="ptkDragStart(event,'${t.id}')" ondragend="ptkDragEnd(event)" ondragover="event.preventDefault();event.stopPropagation();" ondrop="event.stopPropagation();ptkDropTask(event,'${col.key}')">
        <div class="ptk-card-title">${t.name}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:4px">
          <span class="ptk-pri ptk-pri-${t.priority}">${t.priority}</span>
          <span style="font-size:10px;color:var(--txt2)">👤 ${t.assignee||'Unassigned'}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:5px">
          <span style="font-size:10px;font-family:var(--font-mono);${dueClass}">📅 ${t.due}</span>
          ${t.hours?`<span style="font-size:10px;color:var(--txt2);font-family:var(--font-mono)">${t.hours}h</span>`:''}
        </div>
        <div class="ptk-pbar"><div class="ptk-pbar-fill" style="width:${t.pct}%;background:${col.color}"></div></div>
        <div style="font-family:var(--font-mono);font-size:9px;color:${col.color};margin-top:2px;text-align:right">${t.pct}%</div>
      </div>`;
    }).join('');
    return `<div class="ptk-col">
      <div class="ptk-col-hdr">
        <span class="ptk-col-title" style="color:${col.color}">${col.label}</span>
        <span class="ptk-col-count">${tasks.length}</span>
      </div>
      <div class="ptk-col-body" data-phase="${col.key}" ondragover="ptkDragOver(event)" ondrop="ptkDropTask(event,'${col.key}')">${cards||'<div style="font-size:11px;color:var(--txt2);text-align:center;padding:20px 0">No tasks</div>'}</div>
    </div>`;
  }).join('');
}

let _ptkDragTaskId='';
function ptkDragStart(e,taskId){
  _ptkDragTaskId=taskId;
  if(e?.dataTransfer){
    e.dataTransfer.effectAllowed='move';
    e.dataTransfer.setData('text/plain',taskId);
  }
  // add dragging class after a tick so the ghost image captures normal state
  requestAnimationFrame(()=>{
    const el=document.querySelector(`.ptk-card[data-task-id="${taskId}"]`);
    if(el)el.classList.add('dragging');
  });
}
function ptkDragOver(e){
  if(e)e.preventDefault();
  // highlight the column body being hovered
  const col=e?.currentTarget;
  if(col&&col.classList.contains('ptk-col-body')){
    document.querySelectorAll('.ptk-col-body').forEach(c=>c.classList.remove('drag-over'));
    col.classList.add('drag-over');
  }
}
function ptkDragEnd(){
  _ptkDragTaskId='';
  document.querySelectorAll('.ptk-card.dragging').forEach(el=>el.classList.remove('dragging'));
  document.querySelectorAll('.ptk-col-body.drag-over').forEach(el=>el.classList.remove('drag-over'));
}
function ptkDropTask(e,targetPhase){
  if(e)e.preventDefault();
  // clean up visual state immediately
  document.querySelectorAll('.ptk-card.dragging').forEach(el=>el.classList.remove('dragging'));
  document.querySelectorAll('.ptk-col-body.drag-over').forEach(el=>el.classList.remove('drag-over'));
  const taskId=(e?.dataTransfer?.getData('text/plain'))||_ptkDragTaskId;
  if(!taskId||!targetPhase)return;
  const d=ptkGetData(_ptkProj);
  const idx=d.tasks.findIndex(t=>t.id===taskId);
  if(idx<0)return;
  d.tasks[idx].phase=targetPhase;
  d.tasks[idx].order=Date.now();
  d.tasks=d.tasks.sort((a,b)=>{
    if(a.phase===b.phase)return toNum(a.order,0)-toNum(b.order,0);
    return String(a.phase).localeCompare(String(b.phase));
  }).map((t,i)=>({...t,order:i}));
  logActivity('task_updated',`Task ${taskId} moved to ${targetPhase}`,_ptkProj);
  ptkRenderAll();
  triggerUpdate();
}

function ptkRenderGantt(){
  const proj=findProjectById(_ptkProj);if(!proj)return;
  const d=ptkGetData(_ptkProj);
  const container=document.getElementById('ptk-gantt');if(!container)return;
  const startD=new Date(proj.start+'T00:00:00');
  const endD=new Date(proj.end+'T00:00:00');
  const totalDays=Math.max(1,(endD-startD)/86400000);
  const phaseColors={done:'#22c55e',inprogress:'#4f8ef7',review:'#f5a623',backlog:'#64748b'};
  const todayD=new Date();
  const todayPct=Math.max(0,Math.min(100,((todayD-startD)/86400000/totalDays*100)));
  const taskRows=d.tasks.map(t=>{
    const tEnd=new Date(t.due+'T00:00:00');
    const tStart=new Date(tEnd);tStart.setDate(tStart.getDate()-(t.hours?Math.ceil(t.hours/8):7));
    const s=Math.max(0,(tStart-startD)/86400000);
    const e=Math.min(totalDays,(tEnd-startD)/86400000);
    const left=(s/totalDays*100).toFixed(1);
    const width=Math.max(0.5,((e-s)/totalDays*100)).toFixed(1);
    const col=phaseColors[t.phase]||'#64748b';
    return `<div style="display:grid;grid-template-columns:clamp(100px,22%,180px) 1fr;align-items:center;border-bottom:1px solid var(--border2);min-height:34px;padding:2px 0;">
      <div style="font-size:11px;color:var(--txt1);font-weight:500;padding-right:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${t.name}">${t.name}</div>
      <div style="position:relative;height:20px;background:var(--bg3);border-radius:3px;">
        <div style="position:absolute;top:2px;bottom:2px;left:${left}%;width:${width}%;background:${col};border-radius:3px;opacity:${t.phase==='backlog'?.5:1};display:flex;align-items:center;padding-left:4px;font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,.7);font-weight:700;overflow:hidden;white-space:nowrap;">${t.pct}%</div>
      </div>
    </div>`;
  }).join('');
  const msRows=d.milestones.map(ms=>{
    const msD=new Date(ms.date+'T00:00:00');
    const off=Math.max(0,Math.min(totalDays,(msD-startD)/86400000));
    const left=(off/totalDays*100).toFixed(1);
    const msCol=ms.status==='achieved'?'var(--green)':ms.status==='at-risk'?'var(--amber)':ms.status==='missed'?'var(--red)':'var(--txt2)';
    return `<div style="display:grid;grid-template-columns:clamp(100px,22%,180px) 1fr;align-items:center;border-bottom:1px solid var(--border2);min-height:30px;padding:2px 0;">
      <div style="font-size:10px;color:${msCol};font-weight:600;padding-right:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">🔷 ${ms.name}</div>
      <div style="position:relative;height:20px;">
        <div style="position:absolute;left:${left}%;top:2px;transform:translateX(-50%);width:12px;height:12px;background:${msCol};clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);"></div>
        <div style="position:absolute;left:${left}%;top:0;bottom:0;border-left:1px dashed ${msCol};opacity:.4;"></div>
      </div>
    </div>`;
  }).join('');
  container.innerHTML=`<div class="card" style="padding:14px 18px;overflow-x:auto;">
    <div style="min-width:660px;">
      <div style="display:grid;grid-template-columns:clamp(100px,22%,180px) 1fr;margin-bottom:6px;">
        <div style="font-family:var(--font-mono);font-size:9px;color:var(--txt2);letter-spacing:1px;">TASK</div>
        <div style="position:relative;height:16px;">
          <div style="position:absolute;left:0;font-family:var(--font-mono);font-size:9px;color:var(--txt2)">${proj.start}</div>
          <div style="position:absolute;right:0;font-family:var(--font-mono);font-size:9px;color:var(--txt2)">${proj.end}</div>
          <div style="position:absolute;left:${todayPct.toFixed(1)}%;top:0;bottom:0;border-left:2px solid var(--red);opacity:.7;"></div>
          <div style="position:absolute;left:${todayPct.toFixed(1)}%;top:-14px;font-family:var(--font-mono);font-size:8px;color:var(--red);transform:translateX(-50%)">TODAY</div>
        </div>
      </div>
      ${taskRows}
      <div style="border-top:1px solid var(--border2);margin:8px 0;"></div>
      ${msRows}
    </div>
  </div>`;
}

function ptkRenderMilestones(){
  const d=ptkGetData(_ptkProj);
  const el=document.getElementById('ptk-milestones');if(!el)return;
  const icons={achieved:'✅','at-risk':'⚠️',upcoming:'🏁',missed:'❌'};
  const colors={achieved:'var(--green)','at-risk':'var(--amber)',upcoming:'var(--blue)',missed:'var(--red)'};
  const bgs={achieved:'rgba(34,197,94,.1)','at-risk':'rgba(245,166,35,.1)',upcoming:'rgba(79,142,247,.1)',missed:'rgba(239,68,68,.1)'};
  el.innerHTML=d.milestones.map(ms=>`
    <div class="ptk-ms-row" style="flex-wrap:wrap;" onclick="ptkViewMS('${ms.id}')">
      <div style="width:36px;height:36px;border-radius:50%;background:${bgs[ms.status]||'var(--bg3)'};display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0">${icons[ms.status]||'🏁'}</div>
      <div>
        <div style="font-size:13px;font-weight:600;margin-bottom:3px">${ms.name}</div>
        <div style="font-size:11px;color:var(--txt2)">${ms.desc}</div>
      </div>
      <div style="text-align:right;min-width:100px;flex-shrink:1">
        <div style="font-family:var(--font-mono);font-size:10px;color:var(--txt2)">${ms.date}</div>
        <div style="margin-top:4px"><span class="status-badge" style="background:${bgs[ms.status]||''};color:${colors[ms.status]||''}">${ms.status.replace('-',' ')}</span></div>
        <div style="display:flex;gap:4px;margin-top:6px;justify-content:flex-end">
          <button class="tb-btn" style="font-size:10px;padding:3px 8px" onclick="event.stopPropagation();ptkEditMS('${ms.id}')">Edit</button>
          <button class="tb-btn" style="font-size:10px;padding:3px 8px;color:var(--red)" onclick="event.stopPropagation();ptkDeleteMS('${ms.id}')">Del</button>
        </div>
      </div>
    </div>`).join('')||'<div class="empty-state">No milestones. Add one above.</div>';
}

function ptkRenderRisks(){
  const d=ptkGetData(_ptkProj);
  const el=document.getElementById('ptk-risks');if(!el)return;
  const rCol=r=>r.impact==='Critical'||r.likelihood==='High'?'var(--red)':r.impact==='High'?'var(--amber)':'var(--txt2)';
  el.innerHTML=d.risks.map(r=>`
    <div class="ptk-risk-row" style="border-left-color:${rCol(r)}" onclick="ptkViewRisk('${r.id}')">
      <div>
        <div style="font-size:13px;font-weight:600;margin-bottom:3px">${r.title}</div>
        <div style="font-size:11px;color:var(--txt2);display:flex;gap:10px;flex-wrap:wrap;margin-bottom:5px">
          <span>${r.type}</span><span>Likelihood: <strong>${r.likelihood}</strong></span><span>Impact: <strong style="color:${rCol(r)}">${r.impact}</strong></span><span>Owner: ${r.owner}</span>
        </div>
        <div style="font-size:11px;color:var(--txt2);line-height:1.5">${r.desc}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;min-width:110px">
        <span class="status-badge ${r.status==='resolved'?'badge-paid':r.status==='mitigating'?'badge-pending':r.status==='accepted'?'badge-draft':'badge-overdue'}">${r.status}</span>
        <button class="tb-btn" style="font-size:10px;padding:3px 8px" onclick="event.stopPropagation();ptkEditRisk('${r.id}')">Edit</button>
        <button class="tb-btn" style="font-size:10px;padding:3px 8px;color:var(--red)" onclick="event.stopPropagation();ptkDeleteRisk('${r.id}')">Del</button>
      </div>
    </div>`).join('')||'<div class="empty-state">No risks logged.</div>';
}

function ptkRenderResources(){
  const d=ptkGetData(_ptkProj);
  const el=document.getElementById('ptk-resources');if(!el)return;
  el.innerHTML=d.resources.map(r=>{
    const uCol=r.util>=95?'var(--red)':r.util>=75?'var(--amber)':'var(--green)';
    const initials=r.name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
    return `<div class="ptk-res-card">
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:8px;background:${r.color}22;color:${r.color};display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0">${initials}</div>
        <div><div style="font-size:13px;font-weight:600">${r.name}</div><div style="font-size:11px;color:var(--txt2)">${r.role} · ${r.type}</div></div>
      </div>
      <div>
        <div style="display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:10px;color:var(--txt2);margin-bottom:4px">
          <span>Utilisation</span><span style="color:${uCol}">${r.util}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${r.util}%;background:${uCol}"></div></div>
      </div>
      <div style="font-size:10px;color:var(--txt2);font-family:var(--font-mono)">${r.util>=100?'⚠ Over-allocated':r.util>=75?'Busy':'Available'}</div>
    </div>`;
  }).join('')||'<div class="empty-state">No resources assigned.</div>';
}

//  PTK modal helpers 
function ptkOpenTask(){
  if(!_ptkProj){nxNotify({title:'Select a project first',type:'warning'});return;}
  document.getElementById('ptk-task-title').textContent='Add Task';
  ['ptk-task-id','ptk-t-name','ptk-t-assignee','ptk-t-desc'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('ptk-t-phase').value='backlog';
  document.getElementById('ptk-t-pri').value='medium';
  document.getElementById('ptk-t-due').value=todayISO();
  document.getElementById('ptk-t-hours').value='';
  document.getElementById('ptk-t-pct').value='0';
  openModal('modal-ptk-task');
}
function ptkSaveTask(){
  const name=document.getElementById('ptk-t-name').value.trim();
  if(!name){nxNotify({title:'Task name required',type:'error'});return;}
  const d=ptkGetData(_ptkProj);
  const payload={name,phase:document.getElementById('ptk-t-phase').value,priority:document.getElementById('ptk-t-pri').value,
    assignee:document.getElementById('ptk-t-assignee').value.trim(),due:document.getElementById('ptk-t-due').value||todayISO(),
    hours:toNum(document.getElementById('ptk-t-hours').value,0),pct:Math.min(100,Math.max(0,toNum(document.getElementById('ptk-t-pct').value,0))),
    desc:document.getElementById('ptk-t-desc').value.trim()};
  const eid=document.getElementById('ptk-task-id').value;
  if(eid){const idx=d.tasks.findIndex(t=>t.id===eid);if(idx>=0)d.tasks[idx]={...d.tasks[idx],...payload};}
  else d.tasks.push({id:'T-'+String(d.tasks.length+1).padStart(3,'0'),...payload});
  d.tasks=d.tasks.map((t,i)=>({...t,order:i}));
  logActivity('task_updated',`Task ${eid||name} saved for ${_ptkProj}`,_ptkProj);
  closeModal('modal-ptk-task');ptkRenderAll();triggerUpdate();nxNotify({title:'Task Saved',sub:'Task updated on board',type:'success'});
}
function ptkViewTask(taskId){
  const d=ptkGetData(_ptkProj);const t=d.tasks.find(x=>x.id===taskId);if(!t)return;
  const phaseLabels={backlog:'Backlog',inprogress:'In Progress',review:'Under Review',done:'Done'};
  const body=`<div class="detail-panel">
    <div class="detail-row"><span class="detail-label">Phase</span><span>${phaseLabels[t.phase]||t.phase}</span></div>
    <div class="detail-row"><span class="detail-label">Priority</span><span class="ptk-pri ptk-pri-${t.priority}">${t.priority}</span></div>
    <div class="detail-row"><span class="detail-label">Assignee</span><span>${t.assignee||'Unassigned'}</span></div>
    <div class="detail-row"><span class="detail-label">Due Date</span><span style="font-family:var(--font-mono)">${t.due}</span></div>
    <div class="detail-row"><span class="detail-label">Estimated Hours</span><span>${t.hours||0}h</span></div>
    <div class="detail-row"><span class="detail-label">% Complete</span><span>${t.pct}%</span></div>
    ${t.desc?`<div class="detail-row" style="align-items:flex-start"><span class="detail-label">Description</span><span style="font-size:11px;line-height:1.6">${t.desc}</span></div>`:''}
  </div>
  <div class="modal-actions" style="margin-top:10px;padding:0">
    <button class="btn" onclick="closeModal('modal-detail');ptkEditTaskById('${t.id}')">Edit</button>
    <button class="btn" style="color:var(--red)" onclick="closeModal('modal-detail');ptkDeleteTask('${t.id}')">Delete</button>
  </div>`;
  openDetailModal(t.name,`Task · ${phaseLabels[t.phase]||t.phase}`,body);
}
function ptkEditTaskById(taskId){
  const d=ptkGetData(_ptkProj);const t=d.tasks.find(x=>x.id===taskId);if(!t)return;
  ptkOpenTask();
  setTimeout(()=>{
    document.getElementById('ptk-task-title').textContent='Edit Task';
    document.getElementById('ptk-task-id').value=taskId;
    document.getElementById('ptk-t-name').value=t.name;
    document.getElementById('ptk-t-phase').value=t.phase;
    document.getElementById('ptk-t-pri').value=t.priority;
    document.getElementById('ptk-t-assignee').value=t.assignee||'';
    document.getElementById('ptk-t-due').value=t.due||todayISO();
    document.getElementById('ptk-t-hours').value=t.hours||0;
    document.getElementById('ptk-t-pct').value=t.pct||0;
    document.getElementById('ptk-t-desc').value=t.desc||'';
  },30);
}
async function ptkDeleteTask(taskId){
  try{await nxConfirm({title:'Delete Task',sub:'This task will be removed from the board.',okLabel:'Delete Task'})}catch{return;}
  const d=ptkGetData(_ptkProj);d.tasks=d.tasks.filter(t=>t.id!==taskId);
  d.tasks=d.tasks.map((t,i)=>({...t,order:i}));
  logActivity('task_updated',`Task ${taskId} deleted from ${_ptkProj}`,_ptkProj);
  ptkRenderAll();triggerUpdate();nxNotify({title:'Task Deleted',type:'warning'});
}
function ptkOpenMilestone(){
  if(!_ptkProj){nxNotify({title:'Select a project first',type:'warning'});return;}
  ['ptk-ms-id','ptk-ms-name','ptk-ms-desc'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('ptk-ms-date').value=todayISO();
  document.getElementById('ptk-ms-status').value='upcoming';
  openModal('modal-ptk-ms');
}
function ptkSaveMilestone(){
  const name=document.getElementById('ptk-ms-name').value.trim();if(!name){nxNotify({title:'Name required',type:'error'});return;}
  const d=ptkGetData(_ptkProj);
  const payload={name,date:document.getElementById('ptk-ms-date').value||todayISO(),status:document.getElementById('ptk-ms-status').value,desc:document.getElementById('ptk-ms-desc').value.trim()};
  const eid=document.getElementById('ptk-ms-id').value;
  if(eid){const idx=d.milestones.findIndex(m=>m.id===eid);if(idx>=0)d.milestones[idx]={...d.milestones[idx],...payload};}
  else d.milestones.push({id:'MS-'+String(d.milestones.length+1).padStart(3,'0'),...payload});
  logActivity('task_updated',`Milestone ${eid||name} saved for ${_ptkProj}`,_ptkProj);
  closeModal('modal-ptk-ms');ptkRenderAll();triggerUpdate();nxNotify({title:'Milestone Saved',type:'success'});
}
function ptkViewMS(msId){
  const d=ptkGetData(_ptkProj);const ms=d.milestones.find(m=>m.id===msId);if(!ms)return;
  const body=`<div class="detail-panel">
    <div class="detail-row"><span class="detail-label">Target Date</span><span style="font-family:var(--font-mono)">${ms.date}</span></div>
    <div class="detail-row"><span class="detail-label">Status</span><span>${ms.status.replace('-',' ')}</span></div>
    <div class="detail-row" style="align-items:flex-start"><span class="detail-label">Description</span><span style="font-size:11px;line-height:1.6">${ms.desc||'–'}</span></div>
  </div>
  <div class="modal-actions" style="margin-top:10px;padding:0">
    <button class="btn" onclick="closeModal('modal-detail');ptkEditMS('${ms.id}')">Edit</button>
    <button class="btn" style="color:var(--red)" onclick="closeModal('modal-detail');ptkDeleteMS('${ms.id}')">Delete</button>
  </div>`;
  openDetailModal(ms.name,'Project Milestone',body);
}
function ptkEditMS(msId){
  const d=ptkGetData(_ptkProj);const ms=d.milestones.find(m=>m.id===msId);if(!ms)return;
  document.getElementById('ptk-ms-id').value=msId;
  document.getElementById('ptk-ms-name').value=ms.name;
  document.getElementById('ptk-ms-date').value=ms.date;
  document.getElementById('ptk-ms-status').value=ms.status;
  document.getElementById('ptk-ms-desc').value=ms.desc||'';
  openModal('modal-ptk-ms');
}
async function ptkDeleteMS(msId){
  try{await nxConfirm({title:'Delete Milestone',okLabel:'Delete Milestone',icon:'🔷',iconBg:'rgba(245,166,35,.12)'})}catch{return;}
  const d=ptkGetData(_ptkProj);d.milestones=d.milestones.filter(m=>m.id!==msId);
  logActivity('task_updated',`Milestone ${msId} deleted from ${_ptkProj}`,_ptkProj);
  ptkRenderAll();triggerUpdate();nxNotify({title:'Milestone Deleted',type:'warning'});
}
function ptkOpenRisk(){
  if(!_ptkProj){nxNotify({title:'Select a project first',type:'warning'});return;}
  ['ptk-r-id','ptk-r-title','ptk-r-owner','ptk-r-desc'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('ptk-r-type').value='Risk';
  document.getElementById('ptk-r-status').value='open';
  document.getElementById('ptk-r-like').value='Medium';
  document.getElementById('ptk-r-impact').value='Medium';
  openModal('modal-ptk-risk');
}
function ptkSaveRisk(){
  const title=document.getElementById('ptk-r-title').value.trim();if(!title){nxNotify({title:'Title required',type:'error'});return;}
  const d=ptkGetData(_ptkProj);
  const payload={title,type:document.getElementById('ptk-r-type').value,status:document.getElementById('ptk-r-status').value,
    likelihood:document.getElementById('ptk-r-like').value,impact:document.getElementById('ptk-r-impact').value,
    owner:document.getElementById('ptk-r-owner').value.trim(),desc:document.getElementById('ptk-r-desc').value.trim()};
  const eid=document.getElementById('ptk-r-id').value;
  if(eid){const idx=d.risks.findIndex(r=>r.id===eid);if(idx>=0)d.risks[idx]={...d.risks[idx],...payload};}
  else d.risks.push({id:'R-'+String(d.risks.length+1).padStart(3,'0'),...payload});
  logActivity('task_updated',`Risk ${eid||title} saved for ${_ptkProj}`,_ptkProj);
  closeModal('modal-ptk-risk');ptkRenderAll();triggerUpdate();nxNotify({title:'Risk Saved',sub:'Risk register updated',type:'success'});
}
function ptkViewRisk(rId){
  const d=ptkGetData(_ptkProj);const r=d.risks.find(x=>x.id===rId);if(!r)return;
  const body=`<div class="detail-panel">
    <div class="detail-row"><span class="detail-label">Type</span><span>${r.type}</span></div>
    <div class="detail-row"><span class="detail-label">Status</span><span>${r.status}</span></div>
    <div class="detail-row"><span class="detail-label">Likelihood</span><span>${r.likelihood}</span></div>
    <div class="detail-row"><span class="detail-label">Impact</span><span>${r.impact}</span></div>
    <div class="detail-row"><span class="detail-label">Owner</span><span>${r.owner||'–'}</span></div>
    ${r.desc?`<div class="detail-row" style="align-items:flex-start"><span class="detail-label">Mitigation</span><span style="font-size:11px;line-height:1.6">${r.desc}</span></div>`:''}
  </div>
  <div class="modal-actions" style="margin-top:10px;padding:0">
    <button class="btn" onclick="closeModal('modal-detail');ptkEditRisk('${r.id}')">Edit</button>
    <button class="btn" style="color:var(--red)" onclick="closeModal('modal-detail');ptkDeleteRisk('${r.id}')">Delete</button>
  </div>`;
  openDetailModal(r.title,r.type+' · '+r.impact+' Impact',body);
}
function ptkEditRisk(rId){
  const d=ptkGetData(_ptkProj);const r=d.risks.find(x=>x.id===rId);if(!r)return;
  document.getElementById('ptk-r-id').value=rId;
  document.getElementById('ptk-r-title').value=r.title;
  document.getElementById('ptk-r-type').value=r.type;
  document.getElementById('ptk-r-status').value=r.status;
  document.getElementById('ptk-r-like').value=r.likelihood;
  document.getElementById('ptk-r-impact').value=r.impact;
  document.getElementById('ptk-r-owner').value=r.owner||'';
  document.getElementById('ptk-r-desc').value=r.desc||'';
  openModal('modal-ptk-risk');
}
async function ptkDeleteRisk(rId){
  try{await nxConfirm({title:'Delete Risk',okLabel:'Delete Risk',icon:'⚠️',iconBg:'rgba(245,166,35,.12)'})}catch{return;}
  const d=ptkGetData(_ptkProj);d.risks=d.risks.filter(r=>r.id!==rId);
  logActivity('task_updated',`Risk ${rId} deleted from ${_ptkProj}`,_ptkProj);
  ptkRenderAll();triggerUpdate();nxNotify({title:'Risk Deleted',type:'warning'});
}

//  Invoice advanced filter 
function invFilter(){
  const q=(document.getElementById('inv-search')?.value||'').toLowerCase();
  const from=document.getElementById('inv-from')?.value||'';
  const to=document.getElementById('inv-to')?.value||'';
  const st=document.getElementById('inv-status-sel')?.value||'';
  let n=0;
  document.querySelectorAll('#inv-tbody tr').forEach(row=>{
    const ok=(!q||row.textContent.toLowerCase().includes(q))&&
             (!from||(row.dataset.issued||'')>=from)&&
             (!to||(row.dataset.issued||'')<=to)&&
             (!st||row.dataset.status===st);
    row.style.display=ok?'':'none';if(ok)n++;
  });
}
function invFilterClear(){
  ['inv-search','inv-from','inv-to','inv-status-sel'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  invFilter();
}
//  PO advanced filter 
function poFilter(){
  const q=(document.getElementById('po-search')?.value||'').toLowerCase();
  const from=document.getElementById('po-from')?.value||'';
  const to=document.getElementById('po-to')?.value||'';
  const st=document.getElementById('po-status-sel')?.value||'';
  document.querySelectorAll('#po-tbody tr').forEach(row=>{
    const ok=(!q||row.textContent.toLowerCase().includes(q))&&
             (!from||(row.dataset.ordered||'')>=from)&&
             (!to||(row.dataset.ordered||'')<=to)&&
             (!st||row.dataset.status===st);
    row.style.display=ok?'':'none';
  });
}
function poFilterClear(){
  ['po-search','po-from','po-to','po-status-sel'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  poFilter();
}
//  Enhanced viewInvoice 
function viewInvoice(id){
  const inv=invoices.find(i=>i.id===id);if(!inv)return;
  const bal=toNum(inv.amount,0)-toNum(inv.paid,0);
  const pct=inv.amount?Math.round((toNum(inv.paid,0)/toNum(inv.amount,0))*100):0;
  const cust=customers.find(c=>c.customerCode===inv.customerCode||c.companyName===(inv.customerName||inv.customer));
  const lines=(inv.lines&&inv.lines.length)?inv.lines:[{description:inv.items||'Line item',qty:1,price:inv.amount,total:inv.amount}];
  const body=`<div class="grid-2" style="gap:10px;margin-bottom:12px">
    <div class="detail-panel" style="margin:0">
      <div class="detail-row"><span class="detail-label">Invoice #</span><span style="font-family:var(--font-mono);color:var(--blue);font-weight:700">${inv.id}</span></div>
      <div class="detail-row"><span class="detail-label">Customer</span><span>${inv.customerName||inv.customer}${cust?` <button class="tb-btn" style="font-size:10px;padding:2px 8px;margin-left:4px" onclick="closeModal('modal-detail');viewCustomer('${cust.customerCode}')">View  </button>`:''}</span></div>
      <div class="detail-row"><span class="detail-label">Project</span><span>${inv.projectName||'Unlinked'}</span></div>
      <div class="detail-row"><span class="detail-label">Issued</span><span style="font-family:var(--font-mono)">${inv.issued}</span></div>
      <div class="detail-row"><span class="detail-label">Due Date</span><span style="font-family:var(--font-mono);color:${inv.status==='Overdue'?'var(--red)':'inherit'}">${inv.due}</span></div>
      <div class="detail-row"><span class="detail-label">Status</span><span class="status-badge ${bc(inv.status)}">${inv.status}</span></div>
    </div>
    <div class="detail-panel" style="margin:0">
      <div class="detail-row"><span class="detail-label">Amount</span><span class="amount" style="font-size:16px;font-weight:700">${fmt(inv.amount)}</span></div>
      <div class="detail-row"><span class="detail-label">Paid</span><span class="amount positive">${fmt(inv.paid)}</span></div>
      <div class="detail-row"><span class="detail-label">Balance Due</span><span class="amount ${bal>0?'negative':''}" style="font-size:14px;font-weight:600">${fmt(bal)}</span></div>
      <div style="margin:8px 0"><div style="display:flex;justify-content:space-between;font-size:10px;color:var(--txt2);font-family:var(--font-mono);margin-bottom:4px"><span>Settlement</span><span>${pct}%</span></div><div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:var(--green)"></div></div></div>
    </div>
  </div>
  ${renderLineTable(lines)}`;
  const invActions=`<button class="btn" style="background:#1e3a5f;color:#fff;border-color:#1e3a5f" onclick="exportInvoicePDF('${inv.id}')">📄 Export PDF</button>`;
  openDetailModal(inv.id,'Invoice · '+inv.status,body,invActions);
}

// ═══════════════════════════════════════════════════════
// SHIPMENT TRACKING – full CRUD
// ═══════════════════════════════════════════════════════
let trackingCounter = 6;

function renderTracking() {
  const tb = document.getElementById('trk-tbody');
  if (!tb) return;
  if (!trackingItems.length) {
    tb.innerHTML = '<tr><td colspan="9" class="empty-state">No shipments tracked yet. Add a shipment to get started.</td></tr>';
    return;
  }
  const statusColor = { 'In Transit':'var(--blue)', 'Processing':'var(--amber)', 'At Customs':'var(--red)', 'Delivered':'var(--green)', 'Awaiting Payment':'var(--amber)' };
  tb.innerHTML = trackingItems.map(t => `<tr>
    <td style="font-family:var(--font-mono);font-size:11px;color:var(--txt2)">${t.id}</td>
    <td style="font-family:var(--font-mono);font-size:11px;color:var(--blue)">${t.ref}</td>
    <td style="font-size:12px;font-weight:500">${t.desc}</td>
    <td style="font-size:11px;color:var(--txt2)">${t.from}</td>
    <td style="font-size:11px;color:var(--txt2)">${t.to}</td>
    <td style="font-size:12px">${t.party}</td>
    <td style="font-family:var(--font-mono);font-size:11px">${t.eta||'–'}</td>
    <td><span class="status-badge" style="background:${statusColor[t.status]||'var(--txt2)'}22;color:${statusColor[t.status]||'var(--txt2)'};border-color:${statusColor[t.status]||'var(--txt2)'}44">${t.status}</span></td>
    <td><button class="row-menu-btn" onclick="rowMenu(this,'tracking','${t.id}')">⋯</button></td>
  </tr>`).join('');
}

function filterTracking() { renderTracking(); }

function viewTracking(id) {
  const t = trackingItems.find(x => x.id === id); if (!t) return;
  const stageHtml = Array.isArray(t.stages) && t.stages.length ? `<div style="margin-top:14px"><div style="font-size:11px;font-weight:600;color:var(--txt2);letter-spacing:.5px;margin-bottom:10px">DELIVERY STAGES</div>${t.stages.map(s=>`<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><div style="width:10px;height:10px;border-radius:50%;flex-shrink:0;background:${s.s==='done'?'var(--green)':s.s==='act'?'var(--amber)':'var(--border2)'};border:2px solid ${s.s==='done'?'var(--green)':s.s==='act'?'var(--amber)':'var(--txt2)'}"></div><span style="font-size:12px;${s.s==='act'?'font-weight:600;color:var(--txt1)':'color:var(--txt2)'}">${s.l}</span><span style="font-family:var(--font-mono);font-size:10px;color:var(--txt2);margin-left:auto">${s.d||''}</span></div>`).join('')}</div>` : '';
  const noteHtml = t.notes ? `<div class="detail-row"><span class="detail-label">Notes</span><span>${t.notes}</span></div>` : '';
  const body = `<div class="detail-panel">
    <div class="detail-row"><span class="detail-label">Tracking ID</span><span style="font-family:var(--font-mono)">${t.id}</span></div>
    <div class="detail-row"><span class="detail-label">Reference</span><span style="font-family:var(--font-mono);color:var(--blue)">${t.ref}</span></div>
    <div class="detail-row"><span class="detail-label">Type</span><span>${t.type}</span></div>
    <div class="detail-row"><span class="detail-label">Description</span><span>${t.desc}</span></div>
    <div class="detail-row"><span class="detail-label">Party / Carrier</span><span>${t.party}</span></div>
    <div class="detail-row"><span class="detail-label">Origin</span><span>${t.from}</span></div>
    <div class="detail-row"><span class="detail-label">Destination</span><span>${t.to}</span></div>
    <div class="detail-row"><span class="detail-label">ETA</span><span style="font-family:var(--font-mono)">${t.eta||'Not set'}</span></div>
    <div class="detail-row"><span class="detail-label">Status</span><span class="status-badge">${t.status}</span></div>
    ${noteHtml}${stageHtml}
  </div>`;
  const actions = `<button class="btn" onclick="closeModal('modal-detail');openTrackingUpdate('${t.id}')">✏️ Update Status</button><button class="btn" onclick="closeModal('modal-detail');openEditTracking('${t.id}')">📝 Edit</button>`;
  openDetailModal(t.id, '🚚 Shipment · ' + t.desc, body, actions);
}

function openTrackingUpdate(id) {
  const t = trackingItems.find(x => x.id === id); if (!t) return;
  document.getElementById('trk-update-id').value = id;
  document.getElementById('trk-update-sub').textContent = t.desc + ' · ' + t.ref;
  const sel = document.getElementById('trk-update-status');
  if (sel) sel.value = t.status;
  const eta = document.getElementById('trk-update-eta');
  if (eta) eta.value = t.eta || '';
  const note = document.getElementById('trk-update-note');
  if (note) note.value = '';
  closeModal('modal-detail');
  openModal('modal-tracking-update');
}

function applyTrackingUpdate() {
  const id = document.getElementById('trk-update-id').value;
  const t = trackingItems.find(x => x.id === id); if (!t) return;
  t.status = document.getElementById('trk-update-status').value;
  t.eta = document.getElementById('trk-update-eta').value;
  const note = document.getElementById('trk-update-note').value.trim();
  if (note) {
    t.notes = note;
    if (Array.isArray(t.stages)) {
      const act = t.stages.find(s => s.s === 'act');
      if (act) { act.s = 'done'; const next = t.stages[t.stages.indexOf(act)+1]; if (next) next.s = 'act'; }
    }
  }
  closeModal('modal-tracking-update');
  renderTracking();
  triggerUpdate();
  nxNotify({ title: 'Shipment Updated', sub: t.id + ' status: ' + t.status, type: 'success' });
}

function extendTrackingEta() {
  const id = document.getElementById('trk-update-id').value;
  const eta = document.getElementById('trk-update-eta');
  if (!eta || !eta.value) return;
  const d = new Date(eta.value);
  d.setDate(d.getDate() + 2);
  eta.value = d.toISOString().slice(0,10);
  nxNotify({ title: 'ETA Extended', sub: '+2 days → ' + eta.value, type: 'info' });
}

function openTrackingUpdateForFirst() { openView('tracking'); }

function openEditTracking(id) {
  const t = trackingItems.find(x => x.id === id); if (!t) return;
  document.getElementById('trk-edit-id').value = id;
  document.getElementById('trk-modal-title').textContent = 'Edit Shipment';
  document.getElementById('trk-desc').value = t.desc || '';
  document.getElementById('trk-from').value = t.from || '';
  document.getElementById('trk-to').value = t.to || '';
  document.getElementById('trk-party').value = t.party || '';
  document.getElementById('trk-eta').value = t.eta || '';
  document.getElementById('trk-notes').value = t.notes || '';
  const typeSel = document.getElementById('trk-type');
  if (typeSel) typeSel.value = t.type || 'PO';
  const statusSel = document.getElementById('trk-status');
  if (statusSel) statusSel.value = t.status || 'Processing';
  _populateTrkRefDropdown(t.type || 'PO', t.ref);
  openModal('modal-tracking-add');
}

function _populateTrkRefDropdown(type, selectedRef) {
  const sel = document.getElementById('trk-ref'); if (!sel) return;
  let opts = [{ value: '', label: '-- Select --' }];
  if (type === 'PO') opts = opts.concat(purchaseOrders.map(p => ({ value: p.id, label: p.id + ' – ' + (p.supplierName||p.supplier) })));
  else if (type === 'INV') opts = opts.concat(invoices.map(i => ({ value: i.id, label: i.id + ' – ' + (i.customerName||i.customer) })));
  sel.innerHTML = opts.map(o => `<option value="${o.value}"${o.value===selectedRef?' selected':''}>${o.label}</option>`).join('');
}

document.addEventListener('change', function(e) {
  if (e.target && e.target.id === 'trk-type') _populateTrkRefDropdown(e.target.value, '');
});

// Pre-populate the ref dropdown when tracking modal opens
// Safe wrapper: applied after DOMContentLoaded to ensure openModal exists
document.addEventListener('DOMContentLoaded', function _patchOpenModal(){
  const _origOpenModal = openModal;
  openModal = function(id) {
    _origOpenModal(id);
    if (id === 'modal-tracking-add') {
      const editId = document.getElementById('trk-edit-id')?.value || '';
      if (!editId) {
        const typeSel = document.getElementById('trk-type');
        _populateTrkRefDropdown(typeSel ? typeSel.value : 'PO', '');
      }
    }
  };
  document.removeEventListener('DOMContentLoaded', _patchOpenModal);
});

function saveTrackingFromForm() {
  const desc = document.getElementById('trk-desc').value.trim();
  if (!desc) { nxNotify({ title: 'Description required', type: 'warning' }); return; }
  const editId = document.getElementById('trk-edit-id').value;
  const type = document.getElementById('trk-type').value;
  const ref = document.getElementById('trk-ref').value;
  const autoParty = type === 'PO'
    ? (purchaseOrders.find(p => p.id === ref)?.supplierName || '')
    : (invoices.find(i => i.id === ref)?.customerName || '');
  const payload = {
    ref: ref || 'MANUAL', type,
    party: document.getElementById('trk-party').value.trim() || autoParty || 'N/A',
    desc,
    from: document.getElementById('trk-from').value.trim(),
    to: document.getElementById('trk-to').value.trim(),
    status: document.getElementById('trk-status').value,
    eta: document.getElementById('trk-eta').value,
    notes: document.getElementById('trk-notes').value.trim(),
    stages: []
  };
  if (editId) {
    const idx = trackingItems.findIndex(t => t.id === editId);
    if (idx >= 0) trackingItems[idx] = { ...trackingItems[idx], ...payload };
  } else {
    trackingCounter++;
    trackingItems.unshift({ id: 'TRK-' + String(trackingCounter).padStart(3,'0'), ...payload });
  }
  closeModal('modal-tracking-add');
  document.getElementById('trk-edit-id').value = '';
  document.getElementById('trk-modal-title').textContent = 'Add Shipment';
  ['trk-desc','trk-from','trk-to','trk-party','trk-notes'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  renderTracking();
  triggerUpdate();
  logActivity(editId?'po_updated':'po_created',`Shipment ${editId?'updated':'added'}: ${payload.desc}`,payload.ref||'');
  logActivity(editId?'po_updated':'po_created',`Shipment ${editId?'updated':'added'}: ${payload.desc}`,payload.ref||'');
  nxNotify({ title: editId ? 'Shipment Updated' : 'Shipment Added', sub: payload.desc, type: 'success' });
}

async function deleteTracking(id) {
  const t = trackingItems.find(x => x.id === id); if (!t) return;
  try { await nxConfirm({ title: 'Delete Shipment', sub: t.desc, okLabel: 'Delete', okStyle: 'background:var(--red);color:#fff;border-color:var(--red)' }); } catch { return; }
  const idx = trackingItems.findIndex(x => x.id === id);
  if (idx >= 0) trackingItems.splice(idx, 1);
  renderTracking(); triggerUpdate();
  nxNotify({ title: 'Shipment Deleted', type: 'warning' });
}

// ═══════════════════════════════════════════════════════
// STATEMENT ENTRIES – manual Create / Edit
// ═══════════════════════════════════════════════════════
function saveStatementEntry() {
  const date = document.getElementById('stmt-entry-date').value;
  const ref = document.getElementById('stmt-entry-ref').value.trim();
  const desc = document.getElementById('stmt-entry-desc').value.trim();
  if (!date || !ref || !desc) { nxNotify({ title: 'Date, Reference and Description are required', type: 'warning' }); return; }
  const debit = Math.max(0, parseFloat(document.getElementById('stmt-entry-debit').value) || 0);
  const credit = Math.max(0, parseFloat(document.getElementById('stmt-entry-credit').value) || 0);
  const status = document.getElementById('stmt-entry-status').value;
  const editRef = document.getElementById('stmt-entry-edit-ref').value;
  const entry = { date, ref, desc, debit, credit, bal: debit - credit, status };
  if (editRef) {
    const idx = statements.findIndex(s => s.ref === editRef);
    if (idx >= 0) statements[idx] = { ...statements[idx], ...entry, ref: editRef };
  } else {
    if (statements.find(s => s.ref === ref)) { nxNotify({ title: 'Reference already exists', type: 'warning' }); return; }
    statements.unshift(entry);
  }
  closeModal('modal-statement-entry');
  document.getElementById('stmt-entry-edit-ref').value = '';
  document.getElementById('stmt-entry-title').textContent = 'Add Statement Entry';
  ['stmt-entry-date','stmt-entry-ref','stmt-entry-desc','stmt-entry-debit','stmt-entry-credit'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  renderStatements(); triggerUpdate();
  logActivity('note_added',`Statement entry ${editRef?'updated':'added'}: ${ref} – ${desc}`,ref);
  logActivity('note_added',`Statement entry ${editRef?'updated':'added'}: ${ref} – ${desc}`,ref);
  nxNotify({ title: editRef ? 'Entry Updated' : 'Entry Added', type: 'success' });
}

function editStatement(ref) {
  const s = statements.find(x => x.ref === ref); if (!s) return;
  document.getElementById('stmt-entry-edit-ref').value = ref;
  document.getElementById('stmt-entry-title').textContent = 'Edit Statement Entry';
  document.getElementById('stmt-entry-date').value = s.date || '';
  document.getElementById('stmt-entry-ref').value = s.ref || '';
  document.getElementById('stmt-entry-desc').value = s.desc || '';
  document.getElementById('stmt-entry-debit').value = s.debit || '';
  document.getElementById('stmt-entry-credit').value = s.credit || '';
  const sel = document.getElementById('stmt-entry-status');
  if (sel) sel.value = s.status || 'Pending';
  openModal('modal-statement-entry');
}

// ═══════════════════════════════════════════════════════
// TRANSACTIONS – Create / Edit / Delete
// ═══════════════════════════════════════════════════════
let txnManualCounter = 1000;

function saveTransactionFromForm() {
  const date = document.getElementById('txn-date').value;
  const amount = parseFloat(document.getElementById('txn-amount').value) || 0;
  if (!date || amount <= 0) { nxNotify({ title: 'Date and Amount are required', type: 'warning' }); return; }
  const editId = document.getElementById('txn-edit-id').value;
  const type = document.getElementById('txn-type').value;
  const ref = document.getElementById('txn-ref').value.trim() || ('MAN-' + String(++txnManualCounter));
  const payload = {
    date, ref, type,
    category: document.getElementById('txn-cat').value,
    party: document.getElementById('txn-party').value.trim() || 'Manual Entry',
    description: document.getElementById('txn-desc').value.trim() || type + ' transaction',
    amount, customerCode: '', supplierCode: '', projectId: ''
  };
  if (editId) {
    const idx = companyTransactions.findIndex(t => t.id === editId);
    if (idx >= 0) companyTransactions[idx] = { ...companyTransactions[idx], ...payload };
  } else {
    companyTransactions.unshift({ id: 'TXN-' + Date.now(), ...payload });
  }
  closeModal('modal-transaction');
  document.getElementById('txn-edit-id').value = '';
  document.getElementById('txn-modal-title').textContent = 'Add Transaction';
  ['txn-date','txn-ref','txn-party','txn-amount','txn-desc'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  logActivity('transaction_recorded',`${payload.type} ${editId?'updated':'recorded'}: ${payload.description}`,ref);
  renderTransactions(); triggerUpdate();
  logActivity('transaction_recorded',`${payload.type} ${editId?'updated':'recorded'}: ${payload.description}`,ref);
  nxNotify({ title: editId ? 'Transaction Updated' : 'Transaction Added', sub: payload.description, type: 'success' });
}

function editTransaction(id) {
  const t = companyTransactions.find(x => x.id === id); if (!t) return;
  document.getElementById('txn-edit-id').value = id;
  document.getElementById('txn-modal-title').textContent = 'Edit Transaction';
  document.getElementById('txn-date').value = t.date || '';
  document.getElementById('txn-ref').value = t.ref || '';
  document.getElementById('txn-party').value = t.party || '';
  document.getElementById('txn-amount').value = t.amount || '';
  document.getElementById('txn-desc').value = t.description || '';
  const typeSel = document.getElementById('txn-type');
  if (typeSel) typeSel.value = t.type || 'Inflow';
  const catSel = document.getElementById('txn-cat');
  if (catSel) catSel.value = t.category || 'Operational';
  openModal('modal-transaction');
}

async function deleteTransaction(id) {
  const t = companyTransactions.find(x => x.id === id); if (!t) return;
  try { await nxConfirm({ title: 'Delete Transaction', sub: (t.description || t.ref), okLabel: 'Delete', okStyle: 'background:var(--red);color:#fff;border-color:var(--red)' }); } catch { return; }
  const idx = companyTransactions.findIndex(x => x.id === id);
  if (idx >= 0) companyTransactions.splice(idx, 1);
  renderTransactions(); triggerUpdate();
  nxNotify({ title: 'Transaction Deleted', type: 'warning' });
}

function switchCatTab(tab,el){
  document.querySelectorAll('.tabs .tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('cat-products').style.display=tab==='products'?'block':'none';
  document.getElementById('cat-services').style.display=tab==='services'?'block':'none';
}

// ============================================================
// INVOICE LINE ITEMS
// ============================================================
let invLineCount=0;
function addInvLine(){
  invLineCount++;
  const id='il'+invLineCount;
  const prodOpts=products.map(p=>`<option value="${p.unitPrice}" data-lbl="${p.name}" data-base="${p.unitPrice}">&#128230; ${p.name} [${p.sku}]</option>`).join('');
  const svcOpts=services.map(s=>`<option value="${s.rate}" data-lbl="${s.name}" data-base="${s.rate}">&#9881; ${s.name} [${s.serviceCode||s.code}]</option>`).join('');
  const row=document.createElement('div');row.id=id;row.className='line-card';
  row.innerHTML=`<div class="line-row"><label>Item (Product/Service)</label><select onchange="onInvItemSel(this,'${id}')"><option value="">-- Select item --</option><optgroup label="Products">${prodOpts}</optgroup><optgroup label="Services">${svcOpts}</optgroup></select></div>
    <div class="line-row"><label>Description</label><input type="text" id="${id}d" placeholder="Description"></div>
    <div class="line-row"><label>Quantity</label><input type="number" id="${id}q" value="1" min="0" oninput="calcInvLine('${id}')"></div>
    <div class="line-row"><label>Base Price (R)</label><input type="number" id="${id}b" value="0" min="0" readonly></div>
    <div class="line-row"><label>Markup (%)</label><input type="number" id="${id}m" value="0" min="0" max="${appConfig.maxMarkupPercent}" oninput="calcInvLine('${id}')"></div>
    <div class="line-row"><label>Unit Price (R)</label><input type="number" id="${id}p" value="0" min="0" readonly></div>
    <div class="line-row"><label>Line Total</label><div id="${id}t" class="line-total">R0.00</div></div>
    <div style="display:flex;justify-content:flex-end"><button class="del-line" onclick="document.getElementById('${id}').remove();updateInvTotals()">Remove</button></div>`;
  document.getElementById('inv-lines-body').appendChild(row);
}
function onInvItemSel(sel,id){
  const price=Number(sel.options[sel.selectedIndex]?.getAttribute('data-base')||sel.value)||0;
  const lbl=sel.options[sel.selectedIndex]?.getAttribute('data-lbl')||'';
  document.getElementById(id+'b').value=price;
  document.getElementById(id+'p').value=price;
  document.getElementById(id+'m').value=0;
  if(lbl)document.getElementById(id+'d').value=lbl;
  calcInvLine(id);
}
function calcInvLine(id){
  const q=Number(document.getElementById(id+'q')?.value)||0;
  const base=Number(document.getElementById(id+'b')?.value)||0;
  const maxMarkup=appConfig.maxMarkupPercent;
  let markup=Number(document.getElementById(id+'m')?.value)||0;
  if(markup>maxMarkup){markup=maxMarkup;document.getElementById(id+'m').value=maxMarkup;showToast(`Markup capped at ${maxMarkup}%`);}
  const p=base*(1+(markup/100));
  if(document.getElementById(id+'p'))document.getElementById(id+'p').value=(Math.round(p*100)/100);
  const el=document.getElementById(id+'t');if(el)el.textContent=fmt(q*p);
  updateInvTotals();
}
function updateInvTotals(){
  let sub=0;
  document.querySelectorAll('#inv-lines-body .line-card').forEach(r=>{
    const q=Number(r.querySelector('input[id$="q"]')?.value)||0;
    const p=Number(r.querySelector('input[id$="p"]')?.value)||0;
    sub+=q*p;
  });
  const vat=Number(document.getElementById('inv-tax')?.value||appConfig.vatRate)/100;
  const disc=Number(document.getElementById('inv-discount')?.value||0)/100;
  const vatAmt=sub*vat;const total=(sub+vatAmt)*(1-disc);
  document.getElementById('inv-calc-sub').textContent=fmt(sub);
  document.getElementById('inv-calc-vat').textContent=fmt(vatAmt);
  document.getElementById('inv-calc-total').textContent=fmt(total);
}

// ============================================================
// PO LINE ITEMS
// ============================================================
let poLineCount=0;
function loadSupplierProducts(){
  const supCode=document.getElementById('po-supplier')?.value;
  const supProds=products.filter(p=>p.supplierCode===supCode);
  if(document.getElementById('po-lines-body').children.length===0) addPOLine();
  document.querySelectorAll('#po-lines-body select').forEach(sel=>{
    const v=sel.value;
    sel.innerHTML='<option value="">-- Select Product --</option>'+supProds.map(p=>`<option value="${p.unitPrice}" data-lbl="${p.name}" data-sku="${p.sku}">${p.name} [${p.sku}]</option>`).join('');
    sel.value=v;
  });
}
function addPOLine(){
  poLineCount++;
  const id='pl'+poLineCount;
  const supCode=document.getElementById('po-supplier')?.value||'';
  const supProds=products.filter(p=>p.supplierCode===supCode);
  const row=document.createElement('tr');row.id=id;
  row.innerHTML=`<td><select style="width:200px" onchange="onPOItemSel(this,'${id}')"><option value="">-- Select Product --</option>${supProds.map(p=>`<option value="${p.unitPrice}" data-lbl="${p.name}" data-sku="${p.sku}">${p.name} [${p.sku}]</option>`).join('')}</select></td>
    <td><input type="text" id="${id}d" style="width:130px" placeholder="Description"></td>
    <td><input type="number" id="${id}q" value="1" min="0" style="width:55px" oninput="calcPOLine('${id}')"></td>
    <td><input type="number" id="${id}p" value="0" min="0" style="width:95px" oninput="calcPOLine('${id}')"></td>
    <td id="${id}t" style="font-family:var(--font-mono)">R0.00</td>
    <td><button class="del-line" onclick="document.getElementById('${id}').remove();updatePOTotals()">&#10005;</button></td>`;
  document.getElementById('po-lines-body').appendChild(row);
}
function onPOItemSel(sel,id){
  const price=Number(sel.value)||0;
  const lbl=sel.options[sel.selectedIndex]?.getAttribute('data-lbl')||'';
  document.getElementById(id+'p').value=price;
  if(lbl)document.getElementById(id+'d').value=lbl;
  calcPOLine(id);
}
function calcPOLine(id){
  const q=Number(document.getElementById(id+'q')?.value)||0;
  const p=Number(document.getElementById(id+'p')?.value)||0;
  const el=document.getElementById(id+'t');if(el)el.textContent=fmt(q*p);
  updatePOTotals();
}
function updatePOTotals(){
  let sub=0;
  document.querySelectorAll('#po-lines-body tr').forEach(r=>{
    const q=Number(r.querySelector('input[id$="q"]')?.value)||0;
    const p=Number(r.querySelector('input[id$="p"]')?.value)||0;
    sub+=q*p;
  });
  const vat=sub*(appConfig.poVatRate/100);
  const vatLbl=document.getElementById('po-vat-label');
  if(vatLbl)vatLbl.textContent=`VAT (${appConfig.poVatRate}%)`;
  document.getElementById('po-calc-sub').textContent=fmt(sub);
  document.getElementById('po-calc-vat').textContent=fmt(vat);
  document.getElementById('po-calc-total').textContent=fmt(sub+vat);
}

// ============================================================
// SYNC DROPDOWNS
// ============================================================
function syncAllDropdowns(){
  const custRows=customers.map(c=>({code:c.customerCode,name:c.companyName}));
  const supRows=suppliers.map(s=>({code:s.supplierCode,name:s.companyName}));
  const projectRows=projects.map(p=>({id:p.id,name:p.name}));
  const invCust=document.getElementById('inv-customer');
  if(invCust)invCust.innerHTML='<option value="">-- Select Customer --</option>'+custRows.map(c=>`<option value="${c.code}">${c.name} (${c.code})</option>`).join('');
  const invProj=document.getElementById('inv-project');
  if(invProj)invProj.innerHTML='<option value="">-- Select Project --</option>'+projectRows.map(p=>`<option value="${p.id}">${p.name} (${p.id})</option>`).join('');
  const stmtCust=document.getElementById('stmt-cust');
  if(stmtCust){
    const cur=stmtCust.value;
    stmtCust.innerHTML='<option>All Customers</option>'+custRows.map(c=>`<option>${c.name}</option>`).join('');
    if(cur&&[...stmtCust.options].some(o=>o.value===cur))stmtCust.value=cur;
  }
  const poSup=document.getElementById('po-supplier');
  if(poSup)poSup.innerHTML='<option value="">-- Select Supplier --</option>'+supRows.map(s=>`<option value="${s.code}">${s.name} (${s.code})</option>`).join('');
  const poProj=document.getElementById('po-project');
  if(poProj)poProj.innerHTML='<option value="">-- Select Project --</option>'+projectRows.map(p=>`<option value="${p.id}">${p.name} (${p.id})</option>`).join('');
  const prodSup=document.getElementById('prod-supplier');
  if(prodSup)prodSup.innerHTML='<option value="">-- Select Supplier --</option>'+supRows.map(s=>`<option value="${s.code}">${s.name} (${s.code})</option>`).join('');
  const svcSup=document.getElementById('svc-supplier');
  if(svcSup)svcSup.innerHTML='<option value="">None</option>'+supRows.map(s=>`<option value="${s.code}">${s.name} (${s.code})</option>`).join('');
  const projCust=document.getElementById('proj-customer');
  if(projCust)projCust.innerHTML='<option value="">-- Select Customer --</option>'+custRows.map(c=>`<option value="${c.code}">${c.name} (${c.code})</option>`).join('');
  // Quotes dropdown in project modal (accepted quotes not yet linked to a project)
  const projQuote=document.getElementById('proj-quote');
  if(projQuote){
    const available=quotes.filter(q=>q.status==='Accepted'&&!q.projectId);
    projQuote.innerHTML='<option value="">-- No quote linked --</option>'+available.map(q=>`<option value="${q.id}">${q.id}: ${q.description||q.customerName} (${fmtShort(q.total||0)})</option>`).join('');
  }
  updateAnalyticsFiltersDropdowns();
  onInvoiceCustomerChange();
  onPOSupplierChange();
}

function findCustomerByCode(code){
  return customers.find(c=>c.customerCode===code);
}
function findSupplierByCode(code){
  return suppliers.find(s=>s.supplierCode===code);
}
function findProjectById(id){
  return projects.find(p=>p.id===id);
}
function onInvoiceCustomerChange(){
  const code=document.getElementById('inv-customer')?.value||'';
  const customer=findCustomerByCode(code);
  document.getElementById('inv-cust-credit').textContent=fmt(customer?.creditLimit||0);
  document.getElementById('inv-cust-balance').textContent=fmt(customer?.currentBalance||0);
  const terms=document.getElementById('inv-terms');
  if(terms)terms.value=customer?.paymentTerms||appConfig.defaultPaymentTerms;
  const projSel=document.getElementById('inv-project');
  if(projSel){
    const filtered=projects.filter(p=>!code||p.customerCode===code);
    const current=projSel.value;
    projSel.innerHTML='<option value="">-- Select Project --</option>'+filtered.map(p=>`<option value="${p.id}">${p.name} (${p.id})</option>`).join('');
    if(filtered.some(p=>p.id===current))projSel.value=current;
  }
}
function onPOSupplierChange(){
  const code=document.getElementById('po-supplier')?.value||'';
  const supplier=findSupplierByCode(code);
  const lead=Math.max(0,toNum(supplier?.leadTime,0));
  document.getElementById('po-lead-time').value=lead||'';
  document.getElementById('po-payment-terms').value=supplier?.paymentTerms||appConfig.defaultPaymentTerms;
  const ordered=document.getElementById('po-ordered')?.value||todayISO();
  if(lead){
    const d=new Date(`${ordered}T00:00:00`);
    d.setDate(d.getDate()+lead);
    document.getElementById('po-expected').value=d.toISOString().slice(0,10);
  }
}

function createProjectFromForm(){
  if(!requirePermission('create_project','Create project'))return;
  const name=document.getElementById('proj-name').value.trim();
  const customerCode=document.getElementById('proj-customer').value;
  if(!name||!customerCode){nxNotify({title:'Project name and customer are required',type:'error'});return;}
  const customer=findCustomerByCode(customerCode);
  const linkedQuoteId=document.getElementById('proj-quote')?.value||'';
  const linkedQuote=linkedQuoteId?quotes.find(q=>q.id===linkedQuoteId):null;
  // Use budget from linked quote if not manually entered
  const manualBudget=Math.max(0,toNum(document.getElementById('proj-budget').value,0));
  const budget=manualBudget>0?manualBudget:(linkedQuote?.total||0);
  const payload={
    name,
    customerCode,
    customerName:customer?.companyName||'',
    quoteId:linkedQuoteId||'',
    site:document.getElementById('proj-site').value.trim()||'Main Site',
    manager:document.getElementById('proj-manager').value.trim()||'Unassigned',
    start:document.getElementById('proj-start').value||todayISO(),
    end:document.getElementById('proj-end').value||todayISO(),
    budget,
    actualCost:projectEditId?(findProjectById(projectEditId)?.actualCost||0):0,
    status:document.getElementById('proj-status').value
  };
  if(projectEditId){
    const idx=projects.findIndex(p=>p.id===projectEditId);
    if(idx>=0)projects[idx]={...projects[idx],...payload};
    addAudit('UPDATE','Projects',`Updated ${projectEditId}`);
    logActivity('task_updated',`Project ${projectEditId} updated`,projectEditId);
  }else{
    const year=new Date().getFullYear();
    const next=Math.max(0,...projects.map(p=>toNum(String(p.id||'').split('-').pop(),0)))+1;
    const id=`PROJ-${year}-${String(next).padStart(3,'0')}`;
    projects.unshift({id,...payload});
    // Link quote → project
    if(linkedQuote&&!linkedQuote.projectId){linkedQuote.projectId=id;}
    addAudit('CREATE','Projects',`Created ${id}${linkedQuoteId?` from quote ${linkedQuoteId}`:''}`);
    logActivity('project_created',`Project ${id} created for ${customer?.companyName||'customer'}`,id);
  }
  projectEditId=null;
  triggerUpdate();
  closeModal('modal-project');
  nxNotify({title:'Project Saved',type:'success'});
}

// ============================================================
// CREATE FROM FORM
// ============================================================
function createCustomerFromForm(){
  const companyName=document.getElementById('cust-name').value.trim();
  const email=document.getElementById('cust-email').value.trim();
  const creditLimit=Math.max(0,toNum(document.getElementById('cust-credit').value,0));
  if(!companyName){nxNotify({title:'Customer company name is required',type:'error'});return;}
  if(!isValidEmail(email)){nxNotify({title:'Enter a valid customer email address',type:'info'});return;}
  if(creditLimit<0){nxNotify({title:'Credit limit cannot be negative',type:'error'});return;}
  const payload={
    companyName,
    industry:document.getElementById('cust-segment').value,
    status:document.getElementById('cust-status').value,
    contactName:document.getElementById('cust-contact').value.trim()||'N/A',
    email:email||'',
    phone:document.getElementById('cust-phone').value.trim()||'',
    creditLimit,
    paymentTerms:document.getElementById('cust-terms').value,
    vatNumber:document.getElementById('cust-tax').value.trim()||'',
    billingAddress:document.getElementById('cust-address').value.trim()||'',
    deliveryAddress:document.getElementById('cust-delivery-address').value.trim()||document.getElementById('cust-address').value.trim()||'',
    currentBalance:editState.type==='customer'?(findCustomerByCode(editState.id)?.currentBalance||0):0
  };
  if(editState.type==='customer'){
    const idx=customers.findIndex(x=>x.customerCode===editState.id);
    if(idx>=0)customers[idx]={...customers[idx],...payload};
    logActivity('task_updated',`Customer ${editState.id} updated`,editState.id);
  }else{
    const next=extractMaxNumericCode(customers,'customerCode','CUST-')+1;
    const customerCode=nextCode('CUST-',next,3);
    customers.unshift({customerCode,id:customerCode,...payload});
    logActivity('project_created',`Customer ${customerCode} added`,customerCode);
  }
  normalizeCoreDataModels();
  editState={type:null,id:null};
  document.querySelector('#modal-customer .modal-title').textContent='Add Customer';
  document.querySelector('#modal-customer .btn-primary').textContent='Add Customer';
  closeModal('modal-customer');nxNotify({title:'Customer added successfully',type:'success'});
  triggerUpdate();
}
function createSupplierFromForm(){
  const companyName=document.getElementById('sup-name').value.trim();
  const email=document.getElementById('sup-email').value.trim();
  if(!companyName){nxNotify({title:'Supplier company name is required',type:'error'});return;}
  if(!isValidEmail(email)){nxNotify({title:'Enter a valid supplier email address',type:'info'});return;}
  const payload={
    companyName,
    category:document.getElementById('sup-category').value,
    contactName:document.getElementById('sup-contact').value.trim()||'N/A',
    email:email||'',
    phone:document.getElementById('sup-phone').value.trim()||'',
    leadTime:Math.max(0,toNum(document.getElementById('sup-lead').value,0)),
    paymentTerms:document.getElementById('sup-terms').value,
    vatNumber:document.getElementById('sup-vat').value.trim()||'',
    physicalAddress:document.getElementById('sup-address').value.trim()||'',
    dispatchAddress:document.getElementById('sup-dispatch-address').value.trim()||document.getElementById('sup-address').value.trim()||'',
    status:document.getElementById('sup-status').value,
  };
  if(editState.type==='supplier'){
    const idx=suppliers.findIndex(x=>x.supplierCode===editState.id);
    if(idx>=0)suppliers[idx]={...suppliers[idx],...payload};
    logActivity('task_updated',`Supplier ${editState.id} updated`,editState.id);
  }else{
    const next=extractMaxNumericCode(suppliers,'supplierCode','SUP-')+1;
    const supplierCode=nextCode('SUP-',next,3);
    suppliers.unshift({supplierCode,id:supplierCode,spend:0,ytdSpend:0,totalPOs:0,...payload});
    logActivity('project_created',`Supplier ${supplierCode} added`,supplierCode);
  }
  normalizeCoreDataModels();
  editState={type:null,id:null};
  document.querySelector('#modal-supplier .modal-title').textContent='Add Supplier';
  document.querySelector('#modal-supplier .btn-primary').textContent='Add Supplier';
  closeModal('modal-supplier');nxNotify({title:'Supplier added successfully',type:'success'});
  triggerUpdate();
}
function createProductFromForm(){
  const name=document.getElementById('prod-name').value.trim();
  const price=Number(document.getElementById('prod-price').value||0);
  const supplierCode=document.getElementById('prod-supplier').value;
  if(!name||price<=0){nxNotify({title:'Product name and price are required',type:'error'});return;}
  if(!supplierCode){nxNotify({title:'Product must be linked to a supplier',type:'error'});return;}
  const sup=findSupplierByCode(supplierCode);
  if(!sup){nxNotify({title:'Select a valid supplier',type:'info'});return;}
  const payload={name,category:document.getElementById('prod-category').value,supplierCode,supplierName:sup.companyName,supplier:sup.companyName,price,unitPrice:price,unit:document.getElementById('prod-unit').value,stock:Number(document.getElementById('prod-stock').value||0),reorder:Number(document.getElementById('prod-reorder').value||10),reorderLevel:Number(document.getElementById('prod-reorder').value||10)};
  if(editState.type==='product'){
    const idx=products.findIndex(x=>x.id===editState.id);
    if(idx>=0)products[idx]={...products[idx],...payload,sku:document.getElementById('prod-sku').value.trim()||products[idx].sku};
    logActivity('task_updated',`Product ${editState.id} updated`,editState.id);
  }else{
    productCounter++;
    const sku=document.getElementById('prod-sku').value.trim()||'PRD-'+String(productCounter).padStart(3,'0');
    products.unshift({id:'PRD-'+String(productCounter).padStart(3,'0'),sku,status:'Active',...payload});
    logActivity('project_created',`Product ${sku} added`,sku);
  }
  normalizeCoreDataModels();
  editState={type:null,id:null};
  document.querySelector('#modal-product .modal-title').textContent='Add Product';
  document.querySelector('#modal-product .btn-primary').textContent='Add Product';
  closeModal('modal-product');nxNotify({title:'Product added to catalogue',type:'success'});
  triggerUpdate();
}
function createServiceFromForm(){
  const name=document.getElementById('svc-name').value.trim();
  const rate=Number(document.getElementById('svc-rate').value||0);
  if(!name||rate<=0){nxNotify({title:'Service name and rate are required',type:'error'});return;}
  const supplierCode=document.getElementById('svc-supplier').value||'';
  const supplier=findSupplierByCode(supplierCode);
  const rateType=document.getElementById('svc-rate-type').value;
  const payload={name,category:document.getElementById('svc-category').value,rateType,rate,unit:document.getElementById('svc-unit').value.trim()||(rateType==='hourly'?'Hour':'Project'),supplierCode,supplier:supplier?.companyName||''};
  if(editState.type==='service'){
    const idx=services.findIndex(x=>x.code===editState.id);
    if(idx>=0)services[idx]={...services[idx],...payload,code:document.getElementById('svc-code').value.trim()||services[idx].code};
    logActivity('task_updated',`Service ${editState.id} updated`,editState.id);
  }else{
    serviceCounter++;
    const code=document.getElementById('svc-code').value.trim()||'SVC-'+String(serviceCounter).padStart(3,'0');
    services.unshift({id:'SVC-'+String(serviceCounter).padStart(3,'0'),code,status:'Active',...payload});
    logActivity('project_created',`Service ${code} added`,code);
  }
  normalizeCoreDataModels();
  editState={type:null,id:null};
  document.querySelector('#modal-service .modal-title').textContent='Add Service';
  document.querySelector('#modal-service .btn-primary').textContent='Add Service';
  closeModal('modal-service');nxNotify({title:'Service added to catalogue',type:'success'});
  triggerUpdate();
}
function createInvoiceFromForm(){
  if(!requirePermission('create_invoice','Create invoice'))return;
  const isEdit=editState.type==='invoice';
  const customerCode=document.getElementById('inv-customer').value;
  const customer=findCustomerByCode(customerCode);
  const projectId=document.getElementById('inv-project').value;
  const project=findProjectById(projectId);
  const issued=document.getElementById('inv-issued').value;
  const due=document.getElementById('inv-due').value;
  if(!customerCode||!customer||!issued||!due){nxNotify({title:'Select a customer and complete required fields',type:'error'});return;}
  if(appConfig.requireProjectLink&&(!projectId||!project)){nxNotify({title:'Invoice must be linked to a project',type:'error'});return;}
  if(project&&project.customerCode&&project.customerCode!==customerCode){nxNotify({title:'Selected project does not belong to selected customer',type:'info'});return;}
  let sub=0;const lines=[];
  document.querySelectorAll('#inv-lines-body .line-card').forEach(r=>{
    const q=Number(r.querySelector('input[id$="q"]')?.value)||0;
    const p=Number(r.querySelector('input[id$="p"]')?.value)||0;
    const base=Number(r.querySelector('input[id$="b"]')?.value)||0;
    const markup=Number(r.querySelector('input[id$="m"]')?.value)||0;
    const d=r.querySelector('input[id$="d"]')?.value||'';
    if(q>0&&p>=0){
      sub+=q*p;
      lines.push({description:d||'Line item',qty:q,basePrice:base,markupPercent:markup,price:p,total:q*p});
    }
  });
  if(lines.length<1||sub<=0){nxNotify({title:'Invoice requires at least one line item',type:'info'});return;}
  const vat=Number(document.getElementById('inv-tax').value||15)/100;
  const disc=Number(document.getElementById('inv-discount').value||0)/100;
  const amount=Math.round((sub+sub*vat)*(1-disc));
  if(isEdit){
    const idx=invoices.findIndex(x=>x.id===editState.id);
    if(idx>=0){
      invoices[idx]={...invoices[idx],customerCode,customerName:customer.companyName,customer:customer.companyName,projectId,projectName:project?.name||'',issued,due,amount,lines,items:rowLineSummary(lines),terms:document.getElementById('inv-terms').value};
      invoices[idx].status=computeInvoiceStatus(invoices[idx]);
      logActivity('invoice_updated',`Invoice ${invoices[idx].id} updated`,invoices[idx].id);
    }
  }else{
    const year=(new Date(issued)).getFullYear()||new Date().getFullYear();
    const currentMax=Math.max(0,...invoices.map(i=>toNum(String(i.id||'').split('-').pop(),0)));
    const created={id:nextYearlyCode('INV-',currentMax+1,year),customerCode,customerName:customer.companyName,customer:customer.companyName,projectId,projectName:project?.name||'',issued,due,amount,paid:0,status:'Sent',lines,items:rowLineSummary(lines),terms:document.getElementById('inv-terms').value};
    created.status=computeInvoiceStatus(created);
    invoices.unshift(created);
    logActivity('invoice_created',`Invoice ${created.id} created for ${customer.companyName}`,created.id);
  }
  editState={type:null,id:null};
  document.querySelector('#modal-invoice .modal-title').textContent='New Invoice';
  document.querySelector('#modal-invoice .btn-primary').textContent='Create Invoice';
  document.getElementById('inv-lines-body').innerHTML='';invLineCount=0;updateInvTotals();
  addAudit(isEdit?'UPDATE':'CREATE','Invoices',`${isEdit?'Updated':'Created'} invoice${project?.name?` for ${project.name}`:''}`);
  closeModal('modal-invoice');nxNotify({title:'Invoice created successfully',type:'success'});
  triggerUpdate();
}
function createPOFromForm(){
  if(!requirePermission('create_po','Create purchase order'))return;
  const isEdit=editState.type==='po';
  const supplierCode=document.getElementById('po-supplier').value;
  const supplier=findSupplierByCode(supplierCode);
  const projectId=document.getElementById('po-project').value;
  const project=findProjectById(projectId);
  const ordered=document.getElementById('po-ordered').value;
  const expected=document.getElementById('po-expected').value;
  if(!supplierCode||!supplier||!ordered||!expected){nxNotify({title:'Select a supplier and complete required fields',type:'error'});return;}
  if(appConfig.requireProjectLink&&(!projectId||!project)){nxNotify({title:'PO must be linked to a project',type:'error'});return;}
  let sub=0;const lines=[];
  document.querySelectorAll('#po-lines-body tr').forEach(r=>{
    const q=Number(r.querySelector('input[id$="q"]')?.value)||0;
    const p=Number(r.querySelector('input[id$="p"]')?.value)||0;
    const d=r.querySelector('input[id$="d"]')?.value||'';
    if(q>0&&p>=0){
      sub+=q*p;
      lines.push({description:d||'PO item',qty:q,price:p,total:q*p});
    }
  });
  if(lines.length<1||sub<=0){nxNotify({title:'PO requires at least one product line',type:'info'});return;}
  const total=Math.round(sub*(1+(appConfig.poVatRate/100)));
  if(isEdit){
    const idx=purchaseOrders.findIndex(x=>x.id===editState.id);
    if(idx>=0){
      purchaseOrders[idx]={...purchaseOrders[idx],supplierCode,supplierName:supplier.companyName,supplier:supplier.companyName,projectId,projectName:project?.name||'',ordered,expected,value:total,lines,products:rowLineSummary(lines),leadTime:supplier.leadTime,paymentTerms:supplier.paymentTerms};
      purchaseOrders[idx].status=computePOStatus(purchaseOrders[idx]);
      logActivity('po_updated',`PO ${purchaseOrders[idx].id} updated`,purchaseOrders[idx].id);
    }
  }else{
    const year=(new Date(ordered)).getFullYear()||new Date().getFullYear();
    const currentMax=Math.max(0,...purchaseOrders.map(p=>toNum(String(p.id||'').split('-').pop(),0)));
    const created={id:nextYearlyCode('PO-',currentMax+1,year),supplierCode,supplierName:supplier.companyName,supplier:supplier.companyName,projectId,projectName:project?.name||'',ordered,expected,value:total,received:0,status:'Issued',lines,products:rowLineSummary(lines),leadTime:supplier.leadTime,paymentTerms:supplier.paymentTerms};
    created.status=computePOStatus(created);
    purchaseOrders.unshift(created);
    logActivity('po_created',`PO ${created.id} created for ${supplier.companyName}`,created.id);
  }
  editState={type:null,id:null};
  document.querySelector('#modal-po .modal-title').textContent='New Purchase Order';
  document.querySelector('#modal-po .btn-primary').textContent='Create PO';
  document.getElementById('po-lines-body').innerHTML='';poLineCount=0;updatePOTotals();
  addAudit(isEdit?'UPDATE':'CREATE','PO',`${isEdit?'Updated':'Created'} PO${project?.name?` for ${project.name}`:''}`);
  closeModal('modal-po');nxNotify({title:'Purchase order created',type:'success'});
  triggerUpdate();
}

function editCustomer(id){
  const c=customers.find(x=>x.customerCode===id||x.id===id);if(!c)return;
  editState={type:'customer',id:c.customerCode};
  document.getElementById('cust-code').value=c.customerCode;
  document.getElementById('cust-name').value=c.companyName;
  document.getElementById('cust-contact').value=c.contactName;
  document.getElementById('cust-email').value=c.email;
  document.getElementById('cust-phone').value=c.phone||'';
  document.getElementById('cust-segment').value=c.industry;
  document.getElementById('cust-status').value=c.status;
  document.getElementById('cust-credit').value=c.creditLimit;
  document.getElementById('cust-terms').value=c.paymentTerms||'Net 30';
  document.getElementById('cust-tax').value=c.vatNumber||'';
  document.getElementById('cust-address').value=c.billingAddress||'';
  document.getElementById('cust-delivery-address').value=c.deliveryAddress||'';
  document.querySelector('#modal-customer .modal-title').textContent='Edit Customer';
  document.querySelector('#modal-customer .btn-primary').textContent='Save Customer';
  openModal('modal-customer');
}
function editSupplier(id){
  const s=suppliers.find(x=>x.supplierCode===id||x.id===id);if(!s)return;
  editState={type:'supplier',id:s.supplierCode};
  document.getElementById('sup-code').value=s.supplierCode;
  document.getElementById('sup-name').value=s.companyName;
  document.getElementById('sup-category').value=s.category;
  document.getElementById('sup-contact').value=s.contactName;
  document.getElementById('sup-email').value=s.email;
  document.getElementById('sup-phone').value=s.phone;
  document.getElementById('sup-lead').value=s.leadTime;
  document.getElementById('sup-terms').value=s.paymentTerms;
  document.getElementById('sup-vat').value=s.vatNumber||'';
  document.getElementById('sup-address').value=s.physicalAddress||'';
  document.getElementById('sup-dispatch-address').value=s.dispatchAddress||'';
  document.getElementById('sup-status').value=s.status;
  document.querySelector('#modal-supplier .modal-title').textContent='Edit Supplier';
  document.querySelector('#modal-supplier .btn-primary').textContent='Save Supplier';
  openModal('modal-supplier');
}
function editProject(id){
  const p=findProjectById(id);if(!p)return;
  projectEditId=id;
  document.getElementById('proj-name').value=p.name;
  document.getElementById('proj-code').value=p.id;
  document.getElementById('proj-status').value=p.status;
  document.getElementById('proj-customer').value=p.customerCode||'';
  document.getElementById('proj-site').value=p.site||'';
  document.getElementById('proj-manager').value=p.manager||'';
  document.getElementById('proj-start').value=p.start||'';
  document.getElementById('proj-end').value=p.end||'';
  document.getElementById('proj-budget').value=p.budget||0;
  document.querySelector('#modal-project .modal-title').textContent='Edit Project';
  document.querySelector('#modal-project .btn-primary').textContent='Save Project';
  openModal('modal-project');
}
function editProduct(id){
  const p=products.find(x=>x.id===id);if(!p)return;
  editState={type:'product',id};
  document.getElementById('prod-name').value=p.name;
  document.getElementById('prod-sku').value=p.sku;
  document.getElementById('prod-category').value=p.category;
  document.getElementById('prod-supplier').value=p.supplierCode||'';
  document.getElementById('prod-price').value=p.unitPrice;
  document.getElementById('prod-unit').value=p.unit;
  document.getElementById('prod-stock').value=p.stock;
  document.getElementById('prod-reorder').value=p.reorder;
  document.querySelector('#modal-product .modal-title').textContent='Edit Product';
  document.querySelector('#modal-product .btn-primary').textContent='Save Product';
  openModal('modal-product');
}
function editService(code){
  const s=services.find(x=>x.code===code);if(!s)return;
  editState={type:'service',id:code};
  document.getElementById('svc-name').value=s.name;
  document.getElementById('svc-code').value=s.code;
  document.getElementById('svc-category').value=s.category;
  document.getElementById('svc-rate-type').value=(s.rateType||'fixed').toLowerCase();
  document.getElementById('svc-rate').value=s.rate;
  document.getElementById('svc-unit').value=s.unit||'';
  document.getElementById('svc-supplier').value=s.supplierCode||'';
  document.querySelector('#modal-service .modal-title').textContent='Edit Service';
  document.querySelector('#modal-service .btn-primary').textContent='Save Service';
  openModal('modal-service');
}
function editInvoice(id){
  const i=invoices.find(x=>x.id===id);if(!i)return;
  editState={type:'invoice',id};
  document.getElementById('inv-customer').value=i.customerCode||'';
  document.getElementById('inv-project').value=i.projectId||'';
  onInvoiceCustomerChange();
  document.getElementById('inv-issued').value=i.issued;
  document.getElementById('inv-due').value=i.due;
  document.getElementById('inv-lines-body').innerHTML='';invLineCount=0;
  const lines=(i.lines&&i.lines.length)?i.lines:[{description:i.items||'Updated line item',qty:1,price:i.amount,total:i.amount}];
  lines.forEach(l=>{
    addInvLine();
    const row=document.querySelector('#inv-lines-body .line-card:last-child');
    if(row){
      row.querySelector('input[id$="d"]').value=l.description||'Line item';
      row.querySelector('input[id$="q"]').value=Number(l.qty)||1;
      row.querySelector('input[id$="b"]').value=Number(l.basePrice)||Number(l.price)||0;
      row.querySelector('input[id$="m"]').value=Number(l.markupPercent)||0;
      row.querySelector('input[id$="p"]').value=Number(l.price)||0;
    }
  });
  updateInvTotals();
  document.querySelector('#modal-invoice .modal-title').textContent='Edit Invoice';
  document.querySelector('#modal-invoice .btn-primary').textContent='Save Invoice';
  openModal('modal-invoice');
}
function editPO(id){
  const p=purchaseOrders.find(x=>x.id===id);if(!p)return;
  editState={type:'po',id};
  document.getElementById('po-supplier').value=p.supplierCode||'';
  document.getElementById('po-project').value=p.projectId||'';
  onPOSupplierChange();
  document.getElementById('po-ordered').value=p.ordered;
  document.getElementById('po-expected').value=p.expected;
  document.getElementById('po-lines-body').innerHTML='';poLineCount=0;
  const lines=(p.lines&&p.lines.length)?p.lines:[{description:p.products||'Updated PO item',qty:1,price:p.value,total:p.value}];
  lines.forEach(l=>{
    addPOLine();
    const row=document.querySelector('#po-lines-body tr:last-child');
    if(row){
      row.querySelector('input[id$="d"]').value=l.description||'PO item';
      row.querySelector('input[id$="q"]').value=Number(l.qty)||1;
      row.querySelector('input[id$="p"]').value=Number(l.price)||0;
    }
  });
  updatePOTotals();
  document.querySelector('#modal-po .modal-title').textContent='Edit Purchase Order';
  document.querySelector('#modal-po .btn-primary').textContent='Save PO';
  openModal('modal-po');
}
function editStatement(ref){
  const s=statements.find(x=>x.ref===ref);if(!s)return;
  const desc=prompt('Edit statement description:',s.desc);
  if(desc===null)return;
  s.desc=desc.trim()||s.desc;
  const nextStatus=prompt('Status (Pending/Cleared/Partial/Draft):',s.status);
  if(nextStatus)s.status=nextStatus;
  logActivity('status_updated',`Statement ${s.ref} updated`,s.ref);
  nxProgressSim('Saving Statement...','Updating ledger',()=>{
    triggerUpdate();
  },500);nxNotify({title:'Statement updated',type:'success'});
}
async function deleteCustomer(id){
  const linked=invoices.some(i=>i.customerCode===id);
  if(linked){nxNotify({title:'Customer has linked invoices and cannot be deleted',type:'error'});return;}
  try{await nxConfirm({title:'Delete Customer',sub:'This customer record will be permanently removed.',okLabel:'Delete Customer'})}catch{return;}
  customers=customers.filter(x=>x.id!==id);
  logActivity('task_updated',`Customer ${id} deleted`,id);
  triggerUpdate();nxNotify({title:'Customer Deleted',type:'warning'});
}
async function deleteSupplier(id){
  const linkedProducts=products.some(p=>p.supplierCode===id);
  const linkedPOs=purchaseOrders.some(p=>p.supplierCode===id);
  if(linkedProducts||linkedPOs){nxNotify({title:'Supplier is linked to products/POs and cannot be deleted',type:'error'});return;}
  try{await nxConfirm({title:'Delete Supplier',sub:'This supplier record will be permanently removed.',okLabel:'Delete Supplier'})}catch{return;}
  suppliers=suppliers.filter(x=>x.id!==id);
  logActivity('task_updated',`Supplier ${id} deleted`,id);
  triggerUpdate();nxNotify({title:'Supplier Deleted',type:'warning'});
}
async function deleteProject(id){
  if(!requirePermission('create_project','Delete project'))return;
  const linkedInv=invoices.some(i=>i.projectId===id);
  const linkedPO=purchaseOrders.some(p=>p.projectId===id);
  if(linkedInv||linkedPO){nxNotify({title:'Project has linked invoices/POs and cannot be deleted',type:'error'});return;}
  try{await nxConfirm({title:'Delete Project',sub:'This project and all its data will be removed.',okLabel:'Delete Project'})}catch{return;}
  projects=projects.filter(p=>p.id!==id);
  addAudit('DELETE','Projects',`Deleted ${id}`);
  logActivity('task_updated',`Project ${id} deleted`,id);
  triggerUpdate();nxNotify({title:'Project Deleted',type:'warning'});
}
async function deleteProduct(id){
  try{await nxConfirm({title:'Delete Product',sub:'This product will be permanently removed.',okLabel:'Delete Product'})}catch{return;}
  products=products.filter(x=>x.id!==id);
  logActivity('task_updated',`Product ${id} deleted`,id);
  nxProgressSim('Saving Product...','Updating inventory',()=>{
    triggerUpdate();
  },500);nxNotify({title:'Product Deleted',type:'warning'});
}
async function deleteService(code){
  try{await nxConfirm({title:'Delete Service',sub:'This service will be permanently removed.',okLabel:'Delete Service'})}catch{return;}
  services=services.filter(x=>x.code!==code);
  logActivity('task_updated',`Service ${code} deleted`,code);
  triggerUpdate();nxNotify({title:'Service deleted',type:'warning'});
}
async function deleteInvoice(id){
  try{await nxConfirm({title:'Delete Invoice',sub:'This invoice will be permanently removed.',okLabel:'Delete Invoice'})}catch{return;}
  invoices=invoices.filter(x=>x.id!==id);
  addAudit('DELETE','Invoices',`Deleted ${id}`);
  logActivity('invoice_updated',`Invoice ${id} deleted`,id);
  triggerUpdate();nxNotify({title:'Invoice Deleted',type:'warning'});
}
async function deletePO(id){
  try{await nxConfirm({title:'Delete Purchase Order',sub:'This PO will be permanently removed.',okLabel:'Delete PO'})}catch{return;}
  purchaseOrders=purchaseOrders.filter(x=>x.id!==id);
  addAudit('DELETE','PO',`Deleted ${id}`);
  logActivity('po_updated',`PO ${id} deleted`,id);
  nxProgressSim('Saving Purchase Order...','Writing to data store',()=>{
    triggerUpdate();
  },600);nxNotify({title:'PO Deleted',type:'warning'});
}
async function deleteStatement(ref){
  try{await nxConfirm({title:'Delete Statement Entry',sub:'This ledger entry will be permanently removed.',okLabel:'Delete Entry'})}catch{return;}
  statements=statements.filter(x=>x.ref!==ref);
  logActivity('task_updated',`Statement ${ref} deleted`,ref);
  nxProgressSim('Saving Statement...','Updating ledger',()=>{
    triggerUpdate();
  },500);nxNotify({title:'Statement Deleted',type:'warning'});
}
function openDocActions(type,id){
  const isInv=type==='invoice';
  const rec=isInv?invoices.find(x=>x.id===id):purchaseOrders.find(x=>x.id===id);
  if(!rec)return;
  const balance=isInv?Math.max(0,rec.amount-rec.paid):Math.max(0,rec.value-rec.received);
  const actions=[
    {label:'View Details',fn:()=>isInv?viewInvoice(id):viewPO(id)},
    {label:'Edit',fn:()=>isInv?editInvoice(id):editPO(id)},
    {label:'Update Status',fn:()=>openStatusModal(isInv?'invoice':'po',id)},
  ];
  if(balance>0){
    actions.push({label:isInv?'Record Payment':'Capture Receipt',fn:()=>isInv?openInvoicePayment(id):openPOReceipt(id)});
  }
  actions.push({label:'Send Email',fn:()=>isInv?sendInvoiceEmail(id):sendPOEmail(id)});
  actions.push({label:'Export PDF',fn:()=>isInv?exportInvoicePDF(id):exportPOPDF(id)});
  actions.push({label:'Delete',danger:true,fn:()=>isInv?deleteInvoice(id):deletePO(id)});
  document.getElementById('doc-actions-sub').textContent=`${isInv?'Invoice':'PO'} ${id}`;
  document.getElementById('doc-actions-list').innerHTML=actions.map((a,idx)=>`<button class="tb-btn" style="justify-content:flex-start;${a.danger?'color:var(--red);border-color:var(--red);':''}" onclick="runDocAction(${idx})">${a.label}</button>`).join('');
  window.__docActions=actions;
  openModal('modal-doc-actions');
}
function runDocAction(i){
  const a=window.__docActions?.[i];
  if(!a)return;
  closeModal('modal-doc-actions');
  a.fn();
}
function openCustomerFromInvoice(invId){
  const inv=invoices.find(x=>x.id===invId);if(!inv)return;
  const c=customers.find(x=>x.customerCode===inv.customerCode)||customers.find(x=>x.companyName===(inv.customerName||inv.customer));
  openView('customers');
  if(c)viewCustomer(c.customerCode);
}
function renderCustomerNotesHtml(c,ci){
  const invoiceOpts=`<option value="">No invoice tag</option>`+ci.map(i=>`<option value="${i.id}">${i.id}</option>`).join('');
  const notes=(c.notes||[]).slice().reverse().map(n=>`<div class="note-item">
    <div class="note-head"><span>${n.type.toUpperCase()} ${n.invoiceId?`· ${n.invoiceId}`:''}</span><span>${n.ts}</span></div>
    <div class="note-body">${n.text}</div>
  </div>`).join('');
  return `<div class="detail-panel" style="margin-top:14px">
    <div style="font-size:13px;font-weight:600;margin-bottom:10px">Customer Notes</div>
    <div class="form-grid">
      <div class="form-group"><label>Type</label><select id="cust-note-type"><option>Email</option><option>Call</option><option>SMS</option><option>General</option></select></div>
      <div class="form-group"><label>Invoice Tag</label><select id="cust-note-invoice">${invoiceOpts}</select></div>
      <div class="form-group full"><label>Note</label><textarea id="cust-note-text" placeholder="Add interaction note?"></textarea></div>
    </div>
    <div style="display:flex;justify-content:flex-end;margin-top:8px"><button class="tb-btn primary" onclick="addCustomerNote('${c.customerCode||c.id}')">+ Add Note</button></div>
    <div style="margin-top:10px">${notes||'<div class=\"empty-state\">No notes yet</div>'}</div>
  </div>`;
}
function addCustomerNote(customerId){
  const c=customers.find(x=>x.customerCode===customerId||x.id===customerId);if(!c)return;
  const text=document.getElementById('cust-note-text')?.value.trim();
  if(!text){nxNotify({title:'Note text is required',type:'error'});return;}
  c.notes=c.notes||[];
  c.notes.push({
    type:(document.getElementById('cust-note-type')?.value||'General').toLowerCase(),
    invoiceId:document.getElementById('cust-note-invoice')?.value||'',
    text,
    ts:new Date().toLocaleString('en-ZA')
  });
  persistState();
  viewCustomer(customerId);
  nxNotify({title:'Customer note added',type:'success'});
}

// ============================================================
// VIEW DETAILS
// ============================================================
function viewProject(id){
  const p=findProjectById(id);if(!p)return;
  const invs=invoices.filter(i=>i.projectId===p.id);
  const pos=purchaseOrders.filter(po=>po.projectId===p.id);
  const profitability=p.budget-p.actualCost;
  const body=`<div class="detail-panel">
    <div class="detail-row"><span class="detail-label">Project Code</span><span style="font-family:var(--font-mono)">${p.id}</span></div>
    <div class="detail-row"><span class="detail-label">Customer</span><span>${p.customerName||'N/A'}</span></div>
    <div class="detail-row"><span class="detail-label">Site</span><span>${p.site}</span></div>
    <div class="detail-row"><span class="detail-label">Project Manager</span><span>${p.manager}</span></div>
    <div class="detail-row"><span class="detail-label">Budget</span><span class="amount">${fmt(p.budget)}</span></div>
    <div class="detail-row"><span class="detail-label">Actual Cost</span><span class="amount">${fmt(p.actualCost)}</span></div>
    <div class="detail-row"><span class="detail-label">Revenue</span><span class="amount positive">${fmt(p.revenue||0)}</span></div>
    <div class="detail-row"><span class="detail-label">Variance</span><span class="amount ${profitability<0?'negative':'positive'}">${fmt(profitability)}</span></div>
    <div class="detail-row"><span class="detail-label">Status</span><span class="status-badge ${p.status==='Completed'?'badge-paid':p.status==='In Progress'?'badge-pending':p.status==='On Hold'?'badge-onhold':'badge-draft'}">${p.status}</span></div>
  </div>
  <div class="card" style="padding:0;margin-bottom:10px"><div class="card-header" style="padding:14px 16px 0"><div class="card-title">Linked Invoices (${invs.length})</div></div><div class="table-wrap"><table><thead><tr><th>Invoice</th><th>Amount</th><th>Status</th></tr></thead><tbody>${invs.length?invs.map(i=>`<tr><td>${i.id}</td><td class="amount">${fmt(i.amount)}</td><td><span class="status-badge ${bc(i.status)}">${i.status}</span></td></tr>`).join(''):'<tr><td colspan="3" class="empty-state">No linked invoices</td></tr>'}</tbody></table></div></div>
  <div class="card" style="padding:0"><div class="card-header" style="padding:14px 16px 0"><div class="card-title">Linked Purchase Orders (${pos.length})</div></div><div class="table-wrap"><table><thead><tr><th>PO</th><th>Value</th><th>Status</th></tr></thead><tbody>${pos.length?pos.map(po=>`<tr><td>${po.id}</td><td class="amount">${fmt(po.value)}</td><td><span class="status-badge ${bc(po.status)}">${po.status}</span></td></tr>`).join(''):'<tr><td colspan="3" class="empty-state">No linked purchase orders</td></tr>'}</tbody></table></div></div>`;
  openDetailModal(p.name,'Project delivery and financial summary',body);
}
function viewCustomer(id){
  const c=customers.find(x=>x.customerCode===id||x.id===id);if(!c)return;
  const ci=invoices.filter(i=>i.customerCode===c.customerCode||i.customerName===c.companyName||i.customer===c.companyName)
    .sort((a,b)=>new Date(b.issued||0)-new Date(a.issued||0));
  const last3=ci.slice(0,3);
  const totalInv=ci.reduce((s,i)=>s+toNum(i.amount,0),0);
  const totalPaid=ci.reduce((s,i)=>s+toNum(i.paid,0),0);
  const overdue=ci.filter(i=>i.status==='Overdue').length;
  const utilPct=c.creditLimit>0?Math.min(100,Math.round((c.currentBalance/c.creditLimit)*100)):0;
  const utilCol=utilPct>85?'var(--red)':utilPct>60?'var(--amber)':'var(--green)';
  const body=`<div class="grid-2" style="gap:10px;margin-bottom:12px">
    <div class="detail-panel" style="margin:0">
      <div class="detail-row"><span class="detail-label">Customer Code</span><span style="font-family:var(--font-mono)">${c.customerCode}</span></div>
      <div class="detail-row"><span class="detail-label">Industry</span><span>${c.industry}</span></div>
      <div class="detail-row"><span class="detail-label">Contact</span><span>${c.contactName}</span></div>
      <div class="detail-row"><span class="detail-label">Email</span><span>${c.email}</span></div>
      <div class="detail-row"><span class="detail-label">Phone</span><span>${c.phone||'N/A'}</span></div>
      <div class="detail-row"><span class="detail-label">Payment Terms</span><span>${c.paymentTerms}</span></div>
      <div class="detail-row"><span class="detail-label">Status</span><span class="status-badge ${bc(c.status)}">${c.status}</span></div>
    </div>
    <div class="detail-panel" style="margin:0">
      <div class="detail-row"><span class="detail-label">Credit Limit</span><span class="amount">${fmt(c.creditLimit)}</span></div>
      <div class="detail-row"><span class="detail-label">Outstanding</span><span class="amount ${c.currentBalance>0?'negative':''}">${fmt(c.currentBalance)}</span></div>
      <div class="detail-row"><span class="detail-label">Credit Used</span><span style="color:${utilCol};font-family:var(--font-mono);font-weight:600">${utilPct}%</span></div>
      <div style="margin:4px 0 8px"><div class="progress-bar"><div class="progress-fill" style="width:${utilPct}%;background:${utilCol}"></div></div></div>
      <div class="detail-row"><span class="detail-label">Total Invoiced</span><span class="amount">${fmt(totalInv)}</span></div>
      <div class="detail-row"><span class="detail-label">Total Collected</span><span class="amount positive">${fmt(totalPaid)}</span></div>
      <div class="detail-row"><span class="detail-label">Overdue</span><span style="color:${overdue>0?'var(--red)':'inherit'};font-weight:${overdue>0?700:400}">${overdue} invoice${overdue!==1?'s':''}</span></div>
    </div>
  </div>
  <div class="card" style="padding:0;margin-bottom:12px">
    <div class="card-header" style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between">
      <div><div class="card-title">Recent Invoices</div><div class="card-sub">Last ${last3.length} of ${ci.length} total</div></div>
      ${ci.length>3?`<button class="tb-btn" style="font-size:11px" onclick="closeModal('modal-detail');ptkNavToInvoices('${c.customerCode}','${c.companyName}')">View All ${ci.length} -></button>`:''}
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>Invoice #</th><th>Issued</th><th>Due</th><th>Amount</th><th>Paid</th><th>Status</th><th></th></tr></thead>
      <tbody>${last3.length?last3.map(i=>`<tr>
        <td style="font-family:var(--font-mono);font-size:11px;color:var(--blue)">${i.id}</td>
        <td style="font-family:var(--font-mono);font-size:11px">${i.issued}</td>
        <td style="font-family:var(--font-mono);font-size:11px;color:${i.status==='Overdue'?'var(--red)':'inherit'}">${i.due}</td>
        <td class="amount">${fmt(i.amount)}</td>
        <td class="amount positive">${fmt(i.paid)}</td>
        <td><span class="status-badge ${bc(i.status)}">${i.status}</span></td>
        <td><button class="tb-btn" style="font-size:10px;padding:3px 8px" onclick="closeModal('modal-detail');viewInvoice('${i.id}')">View</button></td>
      </tr>`).join(''):'<tr><td colspan="7" class="empty-state">No invoices for this customer</td></tr>'}
      </tbody>
    </table></div>
  </div>
  ${renderCustomerNotesHtml(c,ci)}`;
  openDetailModal(c.companyName,'Customer account profile',body);
}
function viewSupplier(id){
  const s=suppliers.find(x=>x.supplierCode===id||x.id===id);if(!s)return;
  const sp=products.filter(p=>p.supplierCode===s.supplierCode||p.supplierName===s.companyName);
  const po=purchaseOrders.filter(p=>p.supplierCode===s.supplierCode||p.supplierName===s.companyName||p.supplier===s.companyName)
    .sort((a,b)=>new Date(b.ordered||0)-new Date(a.ordered||0));
  const last3po=po.slice(0,3);
  const totalSpend=po.reduce((t,p)=>t+toNum(p.value,0),0);
  const body=`<div class="grid-2" style="gap:10px;margin-bottom:12px">
    <div class="detail-panel" style="margin:0">
      <div class="detail-row"><span class="detail-label">Supplier Code</span><span style="font-family:var(--font-mono)">${s.supplierCode}</span></div>
      <div class="detail-row"><span class="detail-label">Category</span><span>${s.category}</span></div>
      <div class="detail-row"><span class="detail-label">Contact</span><span>${s.contactName}</span></div>
      <div class="detail-row"><span class="detail-label">Email</span><span>${s.email}</span></div>
      <div class="detail-row"><span class="detail-label">Phone</span><span>${s.phone||'N/A'}</span></div>
      <div class="detail-row"><span class="detail-label">Lead Time</span><span>${s.leadTime} days</span></div>
      <div class="detail-row"><span class="detail-label">Payment Terms</span><span>${s.paymentTerms}</span></div>
      <div class="detail-row"><span class="detail-label">Status</span><span class="status-badge ${bc(s.status)}">${s.status}</span></div>
    </div>
    <div class="detail-panel" style="margin:0">
      <div class="detail-row"><span class="detail-label">Total PO Spend</span><span class="amount">${fmt(totalSpend)}</span></div>
      <div class="detail-row"><span class="detail-label">YTD Spend</span><span class="amount">${fmt(s.spend||0)}</span></div>
      <div class="detail-row"><span class="detail-label">Total POs</span><span>${po.length}</span></div>
      <div class="detail-row"><span class="detail-label">Products Linked</span><span>${sp.length}</span></div>
      <div class="detail-row"><span class="detail-label">Physical Address</span><span style="font-size:11px">${s.physicalAddress||'N/A'}</span></div>
      <div class="detail-row"><span class="detail-label">VAT Number</span><span>${s.vatNumber||'N/A'}</span></div>
    </div>
  </div>
  <div class="card" style="padding:0;margin-bottom:12px">
    <div class="card-header" style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between">
      <div><div class="card-title">Recent Purchase Orders</div><div class="card-sub">Last ${last3po.length} of ${po.length} total</div></div>
      ${po.length>3?`<button class="tb-btn" style="font-size:11px" onclick="closeModal('modal-detail');ptkNavToPOs('${s.supplierCode}','${s.companyName}')">View All ${po.length} -></button>`:''}
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>PO Number</th><th>Ordered</th><th>Expected</th><th>Value</th><th>Status</th><th></th></tr></thead>
      <tbody>${last3po.length?last3po.map(p=>`<tr>
        <td style="font-family:var(--font-mono);font-size:11px;color:var(--amber)">${p.id}</td>
        <td style="font-family:var(--font-mono);font-size:11px">${p.ordered}</td>
        <td style="font-family:var(--font-mono);font-size:11px">${p.expected}</td>
        <td class="amount">${fmt(p.value)}</td>
        <td><span class="status-badge ${bc(p.status)}">${p.status}</span></td>
        <td><button class="tb-btn" style="font-size:10px;padding:3px 8px" onclick="closeModal('modal-detail');viewPO('${p.id}')">View</button></td>
      </tr>`).join(''):'<tr><td colspan="6" class="empty-state">No purchase orders</td></tr>'}
      </tbody>
    </table></div>
  </div>
  <div class="card" style="padding:0">
    <div class="card-header" style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between">
      <div class="card-title">Linked Products (${sp.length})</div>
      ${sp.length>5?`<button class="tb-btn" style="font-size:11px" onclick="closeModal('modal-detail');ptkNavToProducts('${s.supplierCode}','${s.companyName}')">View All -></button>`:''}
    </div>
    <div class="table-wrap"><table><thead><tr><th>SKU</th><th>Product</th><th>Unit Price</th><th>Stock</th><th>Status</th></tr></thead><tbody>
      ${sp.length?sp.slice(0,6).map(p=>`<tr>
        <td style="font-family:var(--font-mono);font-size:11px">${p.sku}</td>
        <td>${p.name}</td>
        <td class="amount">${fmt(p.unitPrice)}</td>
        <td style="color:${p.stock<=p.reorder?'var(--amber)':'inherit'};font-family:var(--font-mono);font-size:11px">${p.stock} ${p.unit}</td>
        <td><span class="status-badge ${bc(p.status)}">${p.status}</span></td>
      </tr>`).join(''):'<tr><td colspan="5" class="empty-state">No products linked</td></tr>'}
    </tbody></table></div>
  </div>`;
  openDetailModal(s.companyName,'Supplier profile · '+s.category,body);
}
function viewProduct(id){
  const p=products.find(x=>x.id===id);if(!p)return;
  const sup=suppliers.find(s=>s.supplierCode===p.supplierCode||s.companyName===(p.supplierName||p.supplier));
  const relPOs=purchaseOrders.filter(po=>po.supplierCode===(sup&&sup.supplierCode)||po.supplier===(p.supplierName||p.supplier)).slice(0,4);
  const stockCol=p.stock<=0?'var(--red)':p.stock<=p.reorder?'var(--amber)':'var(--green)';
  const stockLabel=p.stock<=0?'Out of Stock':p.stock<=p.reorder?'Low Stock':'In Stock';
  const body=`<div class="grid-2" style="gap:10px;margin-bottom:12px">
    <div class="detail-panel" style="margin:0">
      <div class="detail-row"><span class="detail-label">SKU</span><span style="font-family:var(--font-mono)">${p.sku}</span></div>
      <div class="detail-row"><span class="detail-label">Category</span><span>${p.category}</span></div>
      <div class="detail-row"><span class="detail-label">Unit</span><span>${p.unit}</span></div>
      <div class="detail-row"><span class="detail-label">Status</span><span class="status-badge ${bc(p.status)}">${p.status}</span></div>
    </div>
    <div class="detail-panel" style="margin:0">
      <div class="detail-row"><span class="detail-label">Unit Price</span><span class="amount" style="font-size:15px;font-weight:700">${fmt(p.unitPrice)}</span></div>
      <div class="detail-row"><span class="detail-label">Stock on Hand</span><span style="color:${stockCol};font-family:var(--font-mono);font-weight:600">${p.stock} ${p.unit} – ${stockLabel}</span></div>
      <div class="detail-row"><span class="detail-label">Reorder Level</span><span style="font-family:var(--font-mono)">${p.reorder} ${p.unit}</span></div>
    </div>
  </div>
  ${p.stock<=p.reorder?`<div style="background:var(--amber-dim);border:1px solid var(--amber);border-radius:var(--r8);padding:10px 14px;font-size:12px;color:var(--amber);margin-bottom:12px">⚠ Stock at or below reorder level. <button class="tb-btn" style="font-size:10px;padding:3px 8px;margin-left:8px" onclick="closeModal('modal-detail');openModal('modal-po')">Raise PO</button></div>`:''}
  ${sup?`<div class="detail-panel" style="margin-bottom:12px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
      <div style="font-size:12px;font-weight:600;color:var(--txt1)">Supplier</div>
      <button class="tb-btn" style="font-size:10px;padding:3px 8px" onclick="closeModal('modal-detail');viewSupplier('${sup.supplierCode}')">View Supplier  </button>
    </div>
    <div class="detail-row"><span class="detail-label">Company</span><span>${sup.companyName}</span></div>
    <div class="detail-row"><span class="detail-label">Contact</span><span>${sup.contactName} · ${sup.email}</span></div>
    <div class="detail-row"><span class="detail-label">Lead Time</span><span>${sup.leadTime} days</span></div>
    <div class="detail-row"><span class="detail-label">Status</span><span class="status-badge ${bc(sup.status)}">${sup.status}</span></div>
  </div>`:''}
  ${relPOs.length?`<div class="card" style="padding:0">
    <div class="card-header" style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between">
      <div class="card-title">Recent POs from this Supplier</div>
      ${sup?`<button class="tb-btn" style="font-size:10px;padding:3px 8px" onclick="closeModal('modal-detail');ptkNavToPOs('${sup.supplierCode}','${(sup.companyName||'')}')">View All  </button>`:''}
    </div>
    <div class="table-wrap"><table><thead><tr><th>PO Number</th><th>Ordered</th><th>Value</th><th>Status</th></tr></thead><tbody>
      ${relPOs.map(po=>`<tr>
        <td style="font-family:var(--font-mono);font-size:11px;color:var(--amber)">${po.id}</td>
        <td style="font-family:var(--font-mono);font-size:11px">${po.ordered}</td>
        <td class="amount">${fmt(po.value)}</td>
        <td><span class="status-badge ${bc(po.status)}">${po.status}</span></td>
      </tr>`).join('')}
    </tbody></table></div>
  </div>`:''}`;
  openDetailModal(p.name,'Product · '+p.sku,body);
}
function viewService(code){
  const s=services.find(x=>x.code===code);if(!s)return;
  const body=`<div class="detail-panel">
    <div class="detail-row"><span class="detail-label">Code</span><span style="font-family:var(--font-mono)">${s.code}</span></div>
    <div class="detail-row"><span class="detail-label">Category</span><span>${s.category}</span></div>
    <div class="detail-row"><span class="detail-label">Rate Type</span><span>${s.rateType}</span></div>
    <div class="detail-row"><span class="detail-label">Rate</span><span class="amount" style="font-size:16px">${fmt(s.rate)} per ${s.unit}</span></div>
    <div class="detail-row"><span class="detail-label">Supplier (optional)</span><span>${s.supplier||'N/A'}</span></div>
    <div class="detail-row"><span class="detail-label">Status</span><span class="status-badge ${bc(s.status)}">${s.status}</span></div>
  </div>`;
  openDetailModal(s.name,'Service detail &middot; '+s.code,body);
}

// viewInvoice – see enhanced version above

function viewPO(id){
  const p=purchaseOrders.find(x=>x.id===id);if(!p)return;
  const rem=Math.max(0,p.value-p.received);const pct=p.value?Math.round((p.received/p.value)*100):0;
  const lines=(p.lines&&p.lines.length)?p.lines:[{description:p.products||'PO item',qty:1,price:p.value,total:p.value}];
  const body=`<div class="detail-panel">
    <div class="detail-row"><span class="detail-label">PO Number</span><span style="font-family:var(--font-mono);color:var(--amber)">${p.id}</span></div>
    <div class="detail-row"><span class="detail-label">Supplier</span><span>${p.supplierName||p.supplier}</span></div>
    <div class="detail-row"><span class="detail-label">Project</span><span>${p.projectName||'Unlinked'}</span></div>
    <div class="detail-row"><span class="detail-label">Order Date</span><span>${p.ordered}</span></div>
    <div class="detail-row"><span class="detail-label">Expected Delivery</span><span>${p.expected}</span></div>
    <div class="detail-row"><span class="detail-label">Total Value</span><span class="amount">${fmt(p.value)}</span></div>
    <div class="detail-row"><span class="detail-label">Received</span><span class="amount positive">${fmt(p.received)}</span></div>
    <div class="detail-row"><span class="detail-label">Outstanding</span><span class="amount ${rem>0?'negative':''}">${fmt(rem)}</span></div>
    <div class="detail-row"><span class="detail-label">Status</span><span class="status-badge ${bc(p.status)}">${p.status}</span></div>
    <div style="margin-top:12px"><div style="display:flex;justify-content:space-between;font-size:11px;color:var(--txt2);font-family:var(--font-mono)"><span>Receiving Progress</span><span>${pct}%</span></div><div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:var(--teal)"></div></div></div>
  </div>${renderLineTable(lines)}`;
  const poActions=`<button class="btn" style="background:#92400e;color:#fff;border-color:#92400e" onclick="exportPOPDF('${p.id}')">📄 Export PDF</button>`;
  openDetailModal(p.id,'Purchase order detail',body,poActions);
}

function viewStatement(ref){
  const s=statements.find(x=>x.ref===ref);if(!s)return;
  const body=`<div class="detail-panel">
    <div class="detail-row"><span class="detail-label">Date</span><span>${s.date}</span></div>
    <div class="detail-row"><span class="detail-label">Reference</span><span style="font-family:var(--font-mono);color:var(--blue)">${s.ref}</span></div>
    <div class="detail-row"><span class="detail-label">Description</span><span>${s.desc}</span></div>
    <div class="detail-row"><span class="detail-label">Debit</span><span class="amount ${s.debit>0?'negative':''}">${s.debit>0?fmt(s.debit):'&mdash;'}</span></div>
    <div class="detail-row"><span class="detail-label">Credit</span><span class="amount ${s.credit>0?'positive':''}">${s.credit>0?fmt(s.credit):'&mdash;'}</span></div>
    <div class="detail-row"><span class="detail-label">Running Balance</span><span class="amount">${fmt(s.bal)}</span></div>
    <div class="detail-row"><span class="detail-label">Status</span><span class="status-badge ${bc(s.status)}">${s.status}</span></div>
  </div>`;
  const stmtActions=`<button class="btn" style="background:#1e3a5f;color:#fff;border-color:#1e3a5f" onclick="exportStatementPDF('${s.ref}')">📄 Export PDF</button>`;
  openDetailModal(s.ref,'Statement transaction detail',body,stmtActions);
}

// ================================================================
// PDF EXPORT ENGINE – Invoice, PO, Statement
// ================================================================
const PDF_CO = {
  name: 'NexusERP (Pty) Ltd',
  reg: 'Reg: 2018/234567/07',
  vat: 'VAT: 4120198763',
  addr: '14 Sovereign Drive, Sandton, 2196',
  city: 'Johannesburg, Gauteng, South Africa',
  tel: '+27 11 555 0200',
  email: 'accounts@nexuserp.co.za',
  bank: 'First National Bank',
  acc: '62834719205',
  branch: '250655',
  swift: 'FIRNZAJJ',
};

function pdfFmt(n){ return new Intl.NumberFormat('en-ZA',{style:'currency',currency:'ZAR',minimumFractionDigits:2}).format(n||0); }

function pdfStatusColor(s){
  return {Paid:'#16a34a',Sent:'#2563eb',Overdue:'#dc2626',Draft:'#6b7280',
    Approved:'#16a34a',Issued:'#2563eb',Received:'#16a34a',Partial:'#d97706'}[s]||'#374151';
}

function pdfOpen(htmlContent, filename){
  const nid = nxNotify({title:'Generating PDF...',sub:'Opening print preview',type:'info',loading:true});
  setTimeout(()=>{
    const win = window.open('','_blank','width=900,height=700');
    nxDismiss(nid);
    if(!win){
      nxNotify({title:'Pop-up blocked',sub:'Please allow pop-ups for PDF export',type:'error'});
      return;
    }
    nxNotify({title:'PDF Ready',sub:'Use Print   Save as PDF in the preview',type:'success'});
    win.document.write(htmlContent);
    win.document.close();
    win.focus();
    setTimeout(()=>{ win.print(); }, 600);
  }, 400);
}

//  INVOICE PDF 
function exportQuotePDF(qtId){
  const q = quotes.find(x=>x.id===qtId);
  if(!q){ nxNotify({title:'Quote not found',type:'error'}); return; }
  const cust = customers.find(c=>c.customerCode===q.customerCode||c.companyName===q.customer);
  const vatRate = appConfig.vatRate||15;
  const lines = (q.lines&&q.lines.length)
    ? q.lines
    : [{description:q.description||'Professional Services',qty:1,unitPrice:q.totalValue||0,total:q.totalValue||0}];
  const subtotal = lines.reduce((s,l)=>s+toNum(l.total||l.unitPrice,0),0);
  const vatAmt = subtotal*(vatRate/100);
  const total = subtotal+vatAmt;
  const statusCol = pdfStatusColor(q.status);
  const linesHtml = lines.map((l,i)=>`
    <tr style="background:${i%2===0?'#f9fafb':'#ffffff'}">
      <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;color:#111827">${l.description||'Item'}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:center;color:#374151">${l.qty||1}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:right;font-family:monospace;color:#374151">${pdfFmt(l.unitPrice||0)}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:right;font-family:monospace;color:#111827;font-weight:600">${pdfFmt(l.total||l.unitPrice||0)}</td>
    </tr>`).join('');
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
  <title>Quote ${q.id}</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Segoe UI',Arial,sans-serif;background:#fff;color:#111827;font-size:13px}
    @media print{body{print-color-adjust:exact;-webkit-print-color-adjust:exact}.no-print{display:none!important}@page{margin:15mm 18mm;size:A4}}
    .page{max-width:800px;margin:0 auto;padding:32px 36px}
    .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:32px;padding-bottom:24px;border-bottom:2px solid #065f46}
    .co-name{font-size:22px;font-weight:800;color:#065f46;letter-spacing:-0.5px}
    .co-detail{font-size:11px;color:#6b7280;margin-top:4px;line-height:1.7}
    .doc-label{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#6b7280;text-align:right}
    .doc-number{font-size:28px;font-weight:900;color:#065f46;text-align:right;font-family:monospace}
    .doc-status{display:inline-block;padding:4px 12px;border-radius:20px;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:${statusCol}18;color:${statusCol};border:1px solid ${statusCol}40;margin-top:4px}
    .meta-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:28px}
    .meta-box{background:#f9fafb;border-radius:8px;padding:16px 18px;border:1px solid #e5e7eb}
    .meta-label{font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;margin-bottom:10px}
    .meta-name{font-size:14px;font-weight:700;color:#111827;margin-bottom:4px}
    .meta-line{font-size:11px;color:#6b7280;line-height:1.7}
    .dates-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:28px}
    .date-box{text-align:center;padding:12px;background:#f9fafb;border-radius:6px;border:1px solid #e5e7eb}
    .date-lbl{font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9ca3af;margin-bottom:4px}
    .date-val{font-size:13px;font-weight:700;color:#065f46;font-family:monospace}
    table{width:100%;border-collapse:collapse;margin-bottom:0}
    thead tr{background:#065f46}
    thead th{padding:10px 12px;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#fff;text-align:left}
    thead th:nth-child(n+2){text-align:right} thead th:nth-child(2){text-align:center}
    .totals-box{margin-left:auto;width:280px;margin-top:0}
    .tot-row{display:flex;justify-content:space-between;padding:7px 0;font-size:12px;border-bottom:1px solid #f3f4f6;color:#374151}
    .tot-row.grand{font-size:15px;font-weight:800;color:#065f46;border-top:2px solid #065f46;border-bottom:none;padding-top:10px;margin-top:4px}
    .note-box{margin-top:24px;padding:14px 16px;background:#f0fdf4;border-radius:8px;border:1px solid #bbf7d0;font-size:11px;color:#166534}
    .validity{margin-top:8px;font-size:11px;color:#6b7280;text-align:center}
    .print-btn{display:block;margin:20px auto;padding:10px 28px;background:#065f46;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer}
  </style></head><body>
  <div class="page">
    <div class="header">
      <div>
        <div class="co-name">${appConfig.companyName||'NexusERP'}</div>
        <div class="co-detail">${appConfig.companyAddress||''}<br>${appConfig.companyEmail||''} &bull; ${appConfig.companyPhone||''}<br>VAT Reg: ${appConfig.vatNumber||'—'} &bull; Reg No: ${appConfig.regNumber||'—'}</div>
      </div>
      <div style="text-align:right">
        <div class="doc-label">QUOTATION</div>
        <div class="doc-number">${q.id}</div>
        <div class="doc-status">${q.status}</div>
      </div>
    </div>
    <div class="meta-grid">
      <div class="meta-box">
        <div class="meta-label">Quoted To</div>
        <div class="meta-name">${q.customer||cust?.companyName||'—'}</div>
        <div class="meta-line">${cust?.address||''}</div>
        <div class="meta-line">${cust?.email||''}</div>
      </div>
      <div class="meta-box">
        <div class="meta-label">Scope</div>
        <div class="meta-name" style="font-size:12px">${q.description||'—'}</div>
        ${q.projectId?'<div class="meta-line">Project: '+q.projectId+'</div>':''}
      </div>
    </div>
    <div class="dates-grid">
      <div class="date-box"><div class="date-lbl">Issued</div><div class="date-val">${q.issued||'—'}</div></div>
      <div class="date-box"><div class="date-lbl">Valid Until</div><div class="date-val">${q.expires||q.validUntil||'—'}</div></div>
      <div class="date-box"><div class="date-lbl">Reference</div><div class="date-val">${q.id}</div></div>
    </div>
    <table><thead><tr><th>Description</th><th style="text-align:center">Qty</th><th style="text-align:right">Unit Price</th><th style="text-align:right">Total</th></tr></thead>
    <tbody>${linesHtml}</tbody></table>
    <div style="display:flex;justify-content:flex-end;margin-top:16px">
      <div class="totals-box">
        <div class="tot-row"><span>Subtotal</span><span>${pdfFmt(subtotal)}</span></div>
        <div class="tot-row"><span>VAT (${vatRate}%)</span><span>${pdfFmt(vatAmt)}</span></div>
        <div class="tot-row grand"><span>TOTAL</span><span>${pdfFmt(total)}</span></div>
      </div>
    </div>
    ${q.notes?'<div class="note-box"><strong>Notes:</strong> '+q.notes+'</div>':''}
    <div class="validity">This quotation is valid until ${q.expires||q.validUntil||'—'}. Prices exclude delivery unless stated.</div>
    <button class="print-btn no-print" onclick="window.print()">&#128438; Print / Save as PDF</button>
  </div></body></html>`;
  const w = window.open('','_blank');
  if(!w){ nxNotify({title:'Pop-up blocked',sub:'Please allow pop-ups for PDF export',type:'error'}); return; }
  w.document.write(html);
  w.document.close();
  setTimeout(()=>w.print(),400);
  nxNotify({title:'Quote PDF ready',sub:q.id,type:'success'});
}

function exportInvoicePDF(invId){
  const inv = invoices.find(i=>i.id===invId);
  if(!inv){ nxNotify({title:'Invoice not found',type:'error'}); return; }
  const cust = customers.find(c=>c.customerCode===inv.customerCode||c.companyName===(inv.customerName||inv.customer));
  const bal = toNum(inv.amount,0) - toNum(inv.paid,0);
  const vatRate = appConfig.vatRate||15;
  const lines = (inv.lines&&inv.lines.length)
    ? inv.lines
    : [{description: inv.items||'Professional Services', qty:1, price:inv.amount, total:inv.amount}];
  const subtotal = lines.reduce((s,l)=>s+toNum(l.total||l.price,0),0);
  const vatAmt = subtotal*(vatRate/100);
  const linesHtml = lines.map((l,i)=>`
    <tr style="background:${i%2===0?'#f9fafb':'#ffffff'}">
      <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;color:#111827">${l.description||'Item'}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:center;color:#374151">${l.qty||1}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:right;font-family:monospace;color:#374151">${pdfFmt(l.price)}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:right;font-family:monospace;color:#111827;font-weight:600">${pdfFmt(l.total||l.price)}</td>
    </tr>`).join('');

  const statusCol = pdfStatusColor(inv.status);
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
  <title>Invoice ${inv.id}</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Segoe UI',Arial,sans-serif;background:#fff;color:#111827;font-size:13px}
    @media print{
      body{print-color-adjust:exact;-webkit-print-color-adjust:exact}
      .no-print{display:none!important}
      @page{margin:15mm 18mm;size:A4}
    }
    .page{max-width:800px;margin:0 auto;padding:32px 36px}
    .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:32px;padding-bottom:24px;border-bottom:2px solid #1e3a5f}
    .co-name{font-size:22px;font-weight:800;color:#1e3a5f;letter-spacing:-0.5px}
    .co-detail{font-size:11px;color:#6b7280;margin-top:4px;line-height:1.7}
    .doc-label{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#6b7280;text-align:right}
    .doc-number{font-size:28px;font-weight:900;color:#1e3a5f;text-align:right;font-family:monospace}
    .doc-status{display:inline-block;padding:4px 12px;border-radius:20px;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:${statusCol}18;color:${statusCol};border:1px solid ${statusCol}40;text-align:right;margin-top:4px}
    .meta-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:28px}
    .meta-box{background:#f9fafb;border-radius:8px;padding:16px 18px;border:1px solid #e5e7eb}
    .meta-label{font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;margin-bottom:10px}
    .meta-name{font-size:14px;font-weight:700;color:#111827;margin-bottom:4px}
    .meta-line{font-size:11px;color:#6b7280;line-height:1.7}
    .dates-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:28px}
    .date-box{text-align:center;padding:12px;background:#f9fafb;border-radius:6px;border:1px solid #e5e7eb}
    .date-lbl{font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9ca3af;margin-bottom:4px}
    .date-val{font-size:13px;font-weight:700;color:#1e3a5f;font-family:monospace}
    table{width:100%;border-collapse:collapse;margin-bottom:0}
    thead tr{background:#1e3a5f}
    thead th{padding:10px 12px;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#fff;text-align:left}
    thead th:nth-child(2){text-align:center}
    thead th:nth-child(3),thead th:nth-child(4){text-align:right}
    .totals{margin-top:0;border-top:2px solid #1e3a5f;padding:0 0 0 50%}
    .total-row{display:flex;justify-content:space-between;padding:7px 12px;font-size:12px;color:#374151;border-bottom:1px solid #f3f4f6}
    .total-row.grand{background:#1e3a5f;color:#fff;font-size:14px;font-weight:800;border-radius:0 0 6px 6px;padding:10px 12px}
    .total-row.grand span:last-child{font-family:monospace}
    .payment-box{margin-top:24px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:16px 20px}
    .payment-title{font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#1d4ed8;margin-bottom:10px}
    .payment-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
    .payment-item{font-size:11px;color:#374151;display:flex;gap:8px}
    .payment-item span:first-child{color:#9ca3af;min-width:60px}
    .balance-box{margin-top:16px;background:${bal>0?'#fef2f2':'#f0fdf4'};border:1px solid ${bal>0?'#fecaca':'#bbf7d0'};border-radius:8px;padding:14px 20px;display:flex;justify-content:space-between;align-items:center}
    .balance-label{font-size:12px;font-weight:700;color:${bal>0?'#dc2626':'#16a34a'}}
    .balance-amount{font-size:20px;font-weight:900;color:${bal>0?'#dc2626':'#16a34a'};font-family:monospace}
    .footer{margin-top:32px;padding-top:16px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;font-size:10px;color:#9ca3af}
    .print-btn{position:fixed;bottom:24px;right:24px;background:#1e3a5f;color:#fff;border:none;padding:12px 24px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.2)}
    .print-btn:hover{background:#2d4e7e}
  </style>
  </head><body>
  <div class="page">
    <div class="header">
      <div>
        <div class="co-name">${PDF_CO.name}</div>
        <div class="co-detail">${PDF_CO.addr}<br>${PDF_CO.city}<br>${PDF_CO.reg} &nbsp;|&nbsp; ${PDF_CO.vat}<br>${PDF_CO.tel} &nbsp;|&nbsp; ${PDF_CO.email}</div>
      </div>
      <div style="text-align:right">
        <div class="doc-label">Tax Invoice</div>
        <div class="doc-number">${inv.id}</div>
        <div><span class="doc-status">${inv.status}</span></div>
      </div>
    </div>
    <div class="meta-grid">
      <div class="meta-box">
        <div class="meta-label">Bill To</div>
        <div class="meta-name">${inv.customerName||inv.customer}</div>
        ${cust?`<div class="meta-line">${cust.contactName||''}</div><div class="meta-line">${cust.email||''}</div><div class="meta-line">${cust.billingAddress||cust.deliveryAddress||''}</div><div class="meta-line">VAT: ${cust.vatNumber||'N/A'}</div>`:''}
      </div>
      <div class="meta-box">
        <div class="meta-label">Invoice Details</div>
        <div class="meta-line"><strong>Project:</strong> ${inv.projectName||'N/A'}</div>
        <div class="meta-line"><strong>PO Ref:</strong> ${inv.poRef||inv.poNumber||'N/A'}</div>
        <div class="meta-line"><strong>Payment Terms:</strong> ${inv.terms||appConfig.defaultPaymentTerms}</div>
        <div class="meta-line"><strong>VAT Rate:</strong> ${vatRate}%</div>
      </div>
    </div>
    <div class="dates-grid">
      <div class="date-box"><div class="date-lbl">Issue Date</div><div class="date-val">${inv.issued}</div></div>
      <div class="date-box"><div class="date-lbl">Due Date</div><div class="date-val" style="color:${inv.status==='Overdue'?'#dc2626':'#1e3a5f'}">${inv.due}</div></div>
      <div class="date-box"><div class="date-lbl">Reference</div><div class="date-val">${inv.id}</div></div>
    </div>
    <table>
      <thead><tr><th>Description</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr></thead>
      <tbody>${linesHtml}</tbody>
    </table>
    <div class="totals">
      <div class="total-row"><span>Subtotal (excl. VAT)</span><span style="font-family:monospace">${pdfFmt(subtotal)}</span></div>
      <div class="total-row"><span>VAT (${vatRate}%)</span><span style="font-family:monospace">${pdfFmt(vatAmt)}</span></div>
      <div class="total-row"><span>Invoice Total</span><span style="font-family:monospace">${pdfFmt(inv.amount)}</span></div>
      <div class="total-row" style="color:#16a34a"><span>Amount Paid</span><span style="font-family:monospace">${pdfFmt(inv.paid)}</span></div>
      <div class="total-row grand"><span>Balance Due</span><span>${pdfFmt(bal)}</span></div>
    </div>
    <div class="payment-box">
      <div class="payment-title">🏦 Banking Details</div>
      <div class="payment-grid">
        <div class="payment-item"><span>Bank:</span><strong>${PDF_CO.bank}</strong></div>
        <div class="payment-item"><span>Account:</span><strong>${PDF_CO.acc}</strong></div>
        <div class="payment-item"><span>Branch:</span><strong>${PDF_CO.branch}</strong></div>
        <div class="payment-item"><span>SWIFT:</span><strong>${PDF_CO.swift}</strong></div>
      </div>
      <div style="margin-top:10px;font-size:11px;color:#374151">Please use <strong>${inv.id}</strong> as your payment reference.</div>
    </div>
    ${bal>0?`<div class="balance-box"><div class="balance-label">⚠ Amount Outstanding</div><div class="balance-amount">${pdfFmt(bal)}</div></div>`:`<div class="balance-box"><div class="balance-label">✅ Fully Settled</div><div class="balance-amount">${pdfFmt(0)}</div></div>`}
    <div class="footer">
      <span>${PDF_CO.name} &nbsp;|&nbsp; ${PDF_CO.reg} &nbsp;|&nbsp; ${PDF_CO.vat}</span>
      <span>Printed: ${new Date().toLocaleDateString('en-ZA')} &nbsp;|&nbsp; Page 1 of 1</span>
    </div>
  </div>
  <button class="print-btn no-print" onclick="window.print()">📄 Print / Save PDF</button>
  </body></html>`;
  pdfOpen(html, inv.id+'.pdf');
}

//  PO PDF 
function exportPOPDF(poId){
  const p = purchaseOrders.find(x=>x.id===poId);
  if(!p){ console.error('PO not found'); nxNotify({title:'PO not found',type:'error'}); return; }
  const sup = suppliers.find(s=>s.supplierCode===p.supplierCode||s.companyName===(p.supplierName||p.supplier));
  const rem = Math.max(0, toNum(p.value,0) - toNum(p.received,0));
  const vatRate = appConfig.poVatRate||15;
  const lines = (p.lines&&p.lines.length)
    ? p.lines
    : [{description: p.products||'Materials & Supplies', qty:1, price:p.value, total:p.value}];
  const subtotal = lines.reduce((s,l)=>s+toNum(l.total||l.price,0),0);
  const vatAmt = subtotal*(vatRate/100);
  const linesHtml = lines.map((l,i)=>`
    <tr style="background:${i%2===0?'#fffbeb':'#ffffff'}">
      <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;color:#111827">${l.description||'Item'}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:center;color:#374151">${l.qty||1}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:right;font-family:monospace;color:#374151">${pdfFmt(l.price)}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:right;font-family:monospace;color:#111827;font-weight:600">${pdfFmt(l.total||l.price)}</td>
    </tr>`).join('');
  const statusCol = pdfStatusColor(p.status);
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
  <title>Purchase Order ${p.id}</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Segoe UI',Arial,sans-serif;background:#fff;color:#111827;font-size:13px}
    @media print{
      body{print-color-adjust:exact;-webkit-print-color-adjust:exact}
      .no-print{display:none!important}
      @page{margin:15mm 18mm;size:A4}
    }
    .page{max-width:800px;margin:0 auto;padding:32px 36px}
    .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:32px;padding-bottom:24px;border-bottom:2px solid #92400e}
    .co-name{font-size:22px;font-weight:800;color:#92400e;letter-spacing:-0.5px}
    .co-detail{font-size:11px;color:#6b7280;margin-top:4px;line-height:1.7}
    .doc-label{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#6b7280;text-align:right}
    .doc-number{font-size:28px;font-weight:900;color:#92400e;text-align:right;font-family:monospace}
    .doc-status{display:inline-block;padding:4px 12px;border-radius:20px;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:${statusCol}18;color:${statusCol};border:1px solid ${statusCol}40;margin-top:4px}
    .meta-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:28px}
    .meta-box{background:#fffbeb;border-radius:8px;padding:16px 18px;border:1px solid #fde68a}
    .meta-label{font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#b45309;margin-bottom:10px}
    .meta-name{font-size:14px;font-weight:700;color:#111827;margin-bottom:4px}
    .meta-line{font-size:11px;color:#6b7280;line-height:1.7}
    .dates-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:28px}
    .date-box{text-align:center;padding:12px;background:#fffbeb;border-radius:6px;border:1px solid #fde68a}
    .date-lbl{font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#b45309;margin-bottom:4px}
    .date-val{font-size:13px;font-weight:700;color:#92400e;font-family:monospace}
    table{width:100%;border-collapse:collapse}
    thead tr{background:#92400e}
    thead th{padding:10px 12px;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#fff;text-align:left}
    thead th:nth-child(2){text-align:center}
    thead th:nth-child(3),thead th:nth-child(4){text-align:right}
    .totals{border-top:2px solid #92400e;padding:0 0 0 50%}
    .total-row{display:flex;justify-content:space-between;padding:7px 12px;font-size:12px;color:#374151;border-bottom:1px solid #f3f4f6}
    .total-row.grand{background:#92400e;color:#fff;font-size:14px;font-weight:800;border-radius:0 0 6px 6px;padding:10px 12px}
    .delivery-box{margin-top:24px;background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:16px 20px;display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .delivery-title{font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#b45309;margin-bottom:8px;grid-column:1/-1}
    .delivery-item{font-size:11px;color:#374151}
    .delivery-item span:first-child{color:#9ca3af;display:block;font-size:10px;font-weight:600;margin-bottom:2px}
    .terms-box{margin-top:16px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:14px 18px;font-size:11px;color:#6b7280;line-height:1.7}
    .sig-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:32px}
    .sig-box{border-top:1px solid #d1d5db;padding-top:8px;font-size:10px;color:#9ca3af}
    .footer{margin-top:28px;padding-top:16px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;font-size:10px;color:#9ca3af}
    .print-btn{position:fixed;bottom:24px;right:24px;background:#92400e;color:#fff;border:none;padding:12px 24px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.2)}
    .print-btn:hover{background:#a05010}
  </style>
  </head><body>
  <div class="page">
    <div class="header">
      <div>
        <div class="co-name">${PDF_CO.name}</div>
        <div class="co-detail">${PDF_CO.addr}<br>${PDF_CO.city}<br>${PDF_CO.reg} &nbsp;|&nbsp; ${PDF_CO.vat}<br>${PDF_CO.tel} &nbsp;|&nbsp; ${PDF_CO.email}</div>
      </div>
      <div style="text-align:right">
        <div class="doc-label">Purchase Order</div>
        <div class="doc-number">${p.id}</div>
        <div><span class="doc-status">${p.status}</span></div>
      </div>
    </div>
    <div class="meta-grid">
      <div class="meta-box">
        <div class="meta-label">Supplier</div>
        <div class="meta-name">${p.supplierName||p.supplier}</div>
        ${sup?`<div class="meta-line">${sup.contactName||''}</div><div class="meta-line">${sup.email||''}</div><div class="meta-line">${sup.physicalAddress||''}</div><div class="meta-line">VAT: ${sup.vatNumber||'N/A'}</div>`:''}
      </div>
      <div class="meta-box">
        <div class="meta-label">Order Details</div>
        <div class="meta-line"><strong>Project:</strong> ${p.projectName||'N/A'}</div>
        <div class="meta-line"><strong>Payment Terms:</strong> ${p.terms||sup?.paymentTerms||appConfig.defaultPaymentTerms}</div>
        <div class="meta-line"><strong>Lead Time:</strong> ${sup?.leadTime||'TBD'} days</div>
        <div class="meta-line"><strong>VAT Rate:</strong> ${vatRate}%</div>
      </div>
    </div>
    <div class="dates-grid">
      <div class="date-box"><div class="date-lbl">Order Date</div><div class="date-val">${p.ordered}</div></div>
      <div class="date-box"><div class="date-lbl">Expected Delivery</div><div class="date-val">${p.expected}</div></div>
      <div class="date-box"><div class="date-lbl">Received to Date</div><div class="date-val" style="color:#16a34a">${pdfFmt(p.received)}</div></div>
    </div>
    <table>
      <thead><tr><th>Item / Description</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr></thead>
      <tbody>${linesHtml}</tbody>
    </table>
    <div class="totals">
      <div class="total-row"><span>Subtotal (excl. VAT)</span><span style="font-family:monospace">${pdfFmt(subtotal)}</span></div>
      <div class="total-row"><span>VAT (${vatRate}%)</span><span style="font-family:monospace">${pdfFmt(vatAmt)}</span></div>
      <div class="total-row grand"><span>PO Total (incl. VAT)</span><span style="font-family:monospace">${pdfFmt(p.value)}</span></div>
    </div>
    <div class="delivery-box">
      <div class="delivery-title">📦 Delivery Instructions</div>
      <div class="delivery-item"><span>Deliver To</span>${PDF_CO.name} – Site Stores</div>
      <div class="delivery-item"><span>Delivery Address</span>${PDF_CO.addr}, ${PDF_CO.city}</div>
      <div class="delivery-item"><span>Contact on Delivery</span>Site Manager</div>
      <div class="delivery-item"><span>PO Reference</span>${p.id} – quote on all docs</div>
    </div>
    <div class="terms-box">
      <strong>Terms & Conditions:</strong> All goods and services must be supplied in accordance with this purchase order. Delivery must be made to the address specified above by the expected delivery date. Invoices must reference this PO number. ${PDF_CO.name} reserves the right to reject non-conforming goods.
    </div>
    <div class="sig-grid">
      <div class="sig-box">Authorised By: ___________________________<br>Name &amp; Date</div>
      <div class="sig-box">Supplier Acceptance: ___________________________<br>Name &amp; Date</div>
    </div>
    <div class="footer">
      <span>${PDF_CO.name} &nbsp;|&nbsp; ${PDF_CO.reg} &nbsp;|&nbsp; ${PDF_CO.vat}</span>
      <span>Printed: ${new Date().toLocaleDateString('en-ZA')} &nbsp;|&nbsp; Page 1 of 1</span>
    </div>
  </div>
  <button class="print-btn no-print" onclick="window.print()">📄 Print / Save PDF</button>
  </body></html>`;
  pdfOpen(html, p.id+'.pdf');
}

//  STATEMENT PDF 
function exportStatementPDF(ref){
  // If ref passed, export single transaction – if null, export full statement ledger
  const rows = ref ? statements.filter(s=>s.ref===ref) : [...statements].sort((a,b)=>a.date.localeCompare(b.date));
  if(!rows.length){ nxNotify({title:'No data found',type:'warning'}); return; }
  const title = ref ? `Statement Transaction – ${ref}` : 'Account Statement';
  const totalDebit = rows.reduce((s,r)=>s+toNum(r.debit,0),0);
  const totalCredit = rows.reduce((s,r)=>s+toNum(r.credit,0),0);
  const closingBal = rows.length ? toNum(rows[rows.length-1].bal,0) : 0;
  const rowsHtml = rows.map((s,i)=>{
    const col = pdfStatusColor(s.status);
    return `<tr style="background:${i%2===0?'#f9fafb':'#fff'}">
      <td style="padding:8px 10px;border-bottom:1px solid #e5e7eb;font-size:11px;font-family:monospace;color:#374151">${s.date}</td>
      <td style="padding:8px 10px;border-bottom:1px solid #e5e7eb;font-size:11px;font-family:monospace;color:#2563eb;white-space:nowrap">${s.ref}</td>
      <td style="padding:8px 10px;border-bottom:1px solid #e5e7eb;font-size:12px;color:#111827">${s.desc}</td>
      <td style="padding:8px 10px;border-bottom:1px solid #e5e7eb;font-size:11px;text-align:right;font-family:monospace;color:${s.debit>0?'#dc2626':'#9ca3af'}">${s.debit>0?pdfFmt(s.debit):'&mdash;'}</td>
      <td style="padding:8px 10px;border-bottom:1px solid #e5e7eb;font-size:11px;text-align:right;font-family:monospace;color:${s.credit>0?'#16a34a':'#9ca3af'}">${s.credit>0?pdfFmt(s.credit):'&mdash;'}</td>
      <td style="padding:8px 10px;border-bottom:1px solid #e5e7eb;font-size:11px;text-align:right;font-family:monospace;font-weight:600;color:#111827">${pdfFmt(s.bal)}</td>
      <td style="padding:8px 10px;border-bottom:1px solid #e5e7eb;text-align:center"><span style="display:inline-block;padding:2px 8px;border-radius:10px;font-size:9px;font-weight:700;background:${col}18;color:${col};border:1px solid ${col}40">${s.status}</span></td>
    </tr>`;
  }).join('');
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
  <title>${title}</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Segoe UI',Arial,sans-serif;background:#fff;color:#111827;font-size:13px}
    @media print{
      body{print-color-adjust:exact;-webkit-print-color-adjust:exact}
      .no-print{display:none!important}
      @page{margin:12mm 16mm;size:A4 landscape}
    }
    .page{max-width:1000px;margin:0 auto;padding:28px 32px}
    .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:28px;padding-bottom:20px;border-bottom:2px solid #1e3a5f}
    .co-name{font-size:20px;font-weight:800;color:#1e3a5f}
    .co-detail{font-size:11px;color:#6b7280;margin-top:4px;line-height:1.7}
    .doc-title{font-size:24px;font-weight:900;color:#1e3a5f;text-align:right}
    .doc-sub{font-size:11px;color:#6b7280;text-align:right;margin-top:4px}
    .summary-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px}
    .sum-box{background:#f9fafb;border-radius:8px;padding:14px 16px;border:1px solid #e5e7eb;text-align:center}
    .sum-lbl{font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9ca3af;margin-bottom:6px}
    .sum-val{font-size:17px;font-weight:800;font-family:monospace}
    table{width:100%;border-collapse:collapse}
    thead tr{background:#1e3a5f}
    thead th{padding:9px 10px;font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#fff;text-align:left}
    thead th:nth-child(4),thead th:nth-child(5),thead th:nth-child(6){text-align:right}
    thead th:last-child{text-align:center}
    .footer{margin-top:24px;padding-top:14px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;font-size:10px;color:#9ca3af}
    .print-btn{position:fixed;bottom:24px;right:24px;background:#1e3a5f;color:#fff;border:none;padding:12px 24px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.2)}
  </style>
  </head><body>
  <div class="page">
    <div class="header">
      <div>
        <div class="co-name">${PDF_CO.name}</div>
        <div class="co-detail">${PDF_CO.addr} &nbsp;|&nbsp; ${PDF_CO.city}<br>${PDF_CO.reg} &nbsp;|&nbsp; ${PDF_CO.vat} &nbsp;|&nbsp; ${PDF_CO.email}</div>
      </div>
      <div>
        <div class="doc-title">Account Statement</div>
        <div class="doc-sub">Period: ${rows[0]?.date||''} – ${rows[rows.length-1]?.date||''}<br>Generated: ${new Date().toLocaleDateString('en-ZA')}</div>
      </div>
    </div>
    <div class="summary-grid">
      <div class="sum-box"><div class="sum-lbl">Transactions</div><div class="sum-val" style="color:#1e3a5f">${rows.length}</div></div>
      <div class="sum-box"><div class="sum-lbl">Total Debits</div><div class="sum-val" style="color:#dc2626">${pdfFmt(totalDebit)}</div></div>
      <div class="sum-box"><div class="sum-lbl">Total Credits</div><div class="sum-val" style="color:#16a34a">${pdfFmt(totalCredit)}</div></div>
      <div class="sum-box"><div class="sum-lbl">Closing Balance</div><div class="sum-val" style="color:${closingBal>=0?'#1e3a5f':'#dc2626'}">${pdfFmt(closingBal)}</div></div>
    </div>
    <table>
      <thead><tr><th>Date</th><th>Reference</th><th>Description</th><th>Debit</th><th>Credit</th><th>Balance</th><th>Status</th></tr></thead>
      <tbody>${rowsHtml}</tbody>
    </table>
    <div style="display:flex;justify-content:flex-end;margin-top:0">
      <div style="min-width:340px">
        <div style="display:flex;justify-content:space-between;padding:8px 12px;background:#1e3a5f;color:#fff;font-size:13px;font-weight:800;border-radius:0 0 6px 6px">
          <span>Closing Balance</span><span style="font-family:monospace">${pdfFmt(closingBal)}</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>${PDF_CO.name} &nbsp;|&nbsp; ${PDF_CO.reg} &nbsp;|&nbsp; ${PDF_CO.vat}</span>
      <span>This is a computer-generated statement. &nbsp;|&nbsp; ${new Date().toLocaleDateString('en-ZA')}</span>
    </div>
  </div>
  <button class="print-btn no-print" onclick="window.print()">📄 Print / Save PDF</button>
  </body></html>`;
  pdfOpen(html, (ref||'statement')+'.pdf');
}

//  Confirmation dialog (replaces native confirm()) 
let _nxConfirmResolve = null;
let _nxConfirmReject = null;
function nxConfirm({ title='Confirm', sub='This action cannot be undone.', body='', okLabel='Delete', okStyle='background:var(--red);color:#fff;border-color:var(--red)', icon='x', iconBg='rgba(239,68,68,.12)' } = {}) {
  return new Promise((resolve, reject) => {
    _nxConfirmResolve = resolve;
    _nxConfirmReject = reject;
    document.getElementById('nx-confirm-title').textContent = title;
    document.getElementById('nx-confirm-sub').textContent = sub;
    document.getElementById('nx-confirm-body').textContent = body;
    document.getElementById('nx-confirm-icon').textContent = icon;
    document.getElementById('nx-confirm-icon').style.background = iconBg;
    const okBtn = document.getElementById('nx-confirm-ok');
    okBtn.textContent = okLabel;
    okBtn.style.cssText = okStyle;
    openModal('modal-confirm');
  });
}

//  End PDF Engine 

// ============================================================
// CHARTS
// ============================================================
function initCharts(){
  if(typeof Chart==='undefined'){console.warn('[initCharts] Chart.js not loaded');return;}
  const _c=(id,cfg)=>{const el=document.getElementById(id);if(!el){console.warn('[initCharts] canvas not found:',id);return null;}try{return new Chart(el,cfg);}catch(e){console.error('[initCharts] failed for',id,e);return null;}};
  charts.revChart=_c('revChart',{type:'bar',data:{labels:[],datasets:[
    {label:'Revenue',data:[],backgroundColor:'rgba(79,142,247,0.7)',borderColor:'#4f8ef7',borderWidth:1,yAxisID:'y'},
    {label:'Collected',data:[],backgroundColor:'rgba(34,197,94,0.6)',borderColor:'#22c55e',borderWidth:1,yAxisID:'y'},
    {label:'Outstanding',data:[],type:'line',borderColor:'#f5a623',borderWidth:2,fill:false,pointBackgroundColor:'#f5a623',pointRadius:3,tension:.3,yAxisID:'y'},
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},
    scales:{y:{ticks:{color:'#5a6a8a',font:{family:'DM Mono',size:10},callback:v=>'R'+(v/1000).toFixed(0)+'K'},grid:{color:'rgba(42,52,80,.5)'},border:{color:'transparent'}},
      x:{ticks:{color:'#5a6a8a',font:{family:'DM Mono',size:10}},grid:{display:false},border:{color:'#2a3450'}}}}});

  charts.donutChart=_c('donutChart',{type:'doughnut',data:{labels:['Paid','Sent','Overdue','Draft'],datasets:[{data:[0,0,0,0],backgroundColor:['#22c55e','#f5a623','#ef4444','#3a4a6a'],borderWidth:0,hoverOffset:4}]},options:{responsive:true,maintainAspectRatio:false,cutout:'70%',plugins:{legend:{display:false}}}});

  charts.stackedBar=_c('stackedBar',{type:'bar',data:{labels:[],datasets:[
    {label:'Mining',data:[],backgroundColor:'rgba(79,142,247,.8)',stack:'a'},
    {label:'Engineering',data:[],backgroundColor:'rgba(168,85,247,.7)',stack:'a'},
    {label:'Construction',data:[],backgroundColor:'rgba(20,184,166,.6)',stack:'a'},
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#9aaac8',font:{family:'DM Mono',size:10},boxWidth:10}}},
    scales:{y:{stacked:true,ticks:{color:'#5a6a8a',font:{family:'DM Mono',size:10},callback:v=>'R'+v+'K'},grid:{color:'rgba(42,52,80,.5)'},border:{color:'transparent'}},
      x:{stacked:true,ticks:{color:'#5a6a8a',font:{family:'DM Mono',size:10}},grid:{display:false},border:{color:'#2a3450'}}}}});

  charts.catPie=_c('catPie',{type:'pie',data:{labels:['Services','Products','Contracts','Retainer'],datasets:[{data:[0,0,0,0],backgroundColor:['#4f8ef7','#22c55e','#f5a623','#a855f7'],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}}}});

  charts.cashFlow=_c('cashFlow',{type:'bar',data:{labels:[],datasets:[
    {label:'Inflow',data:[],backgroundColor:'rgba(34,197,94,.65)',borderWidth:0},
    {label:'Outflow',data:[],backgroundColor:'rgba(239,68,68,.55)',borderWidth:0},
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#9aaac8',font:{family:'DM Mono',size:9},boxWidth:8}}},
    scales:{y:{ticks:{color:'#5a6a8a',font:{family:'DM Mono',size:9},callback:v=>'R'+Math.abs(v)+'K'},grid:{color:'rgba(42,52,80,.4)'},border:{color:'transparent'}},
      x:{ticks:{color:'#5a6a8a',font:{family:'DM Mono',size:9}},grid:{display:false},border:{color:'#2a3450'}}}}});

  charts.supSpend=_c('supSpend',{type:'doughnut',data:{labels:['Mining Equip','Steel & Metals','Chemicals','Electrical','Civil Matls','Safety & PPE','Tools'],datasets:[{data:[0,0,0,0,0,0,0],backgroundColor:['#4f8ef7','#22c55e','#a855f7','#f5a623','#14b8a6','#ef4444','#f97316'],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,cutout:'55%',plugins:{legend:{position:'right',labels:{color:'#9aaac8',font:{family:'DM Mono',size:8},boxWidth:7,padding:5}}}}});
}

function rnd(v,p){const m=v*(Math.random()*(p*2)-p);return Math.max(0,Math.round(v+m));}

function fetchAnalyticsPayload(){
  return new Promise(resolve=>{
    setTimeout(()=>{
      const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      const rev=[820,760,1040,980,1220,1160,1440,1360,1620,1520,1780,1880].map(v=>rnd(v,0.12));
      const col=rev.map(v=>Math.max(0,Math.round(v*(0.82+Math.random()*0.12))));
      const q=['Q1 24','Q2 24','Q3 24','Q4 24','Q1 25','Q2 25','Q3 25','Q4 25'];
      const mining=[640,720,820,880,960,1080,1240,1380].map(v=>rnd(v,0.1));
      const eng=[280,320,360,400,440,500,560,620].map(v=>rnd(v,0.1));
      const con=[180,220,260,300,340,380,420,460].map(v=>rnd(v,0.12));
      const mo6=['Nov','Dec','Jan','Feb','Mar','Apr'];
      const inflow=[1680,1840,1560,1740,1820,1892].map(v=>rnd(v,0.12));
      const outflow=[760,840,720,800,860,896].map(v=>rnd(v,0.1));
      resolve({months,rev,col,out:rev.map((v,i)=>v-col[i]),
        donut:[52,26,14,8].map(v=>Math.max(3,rnd(v,0.15))),
        q,mining,eng,con,cat:[44,36,14,6].map(v=>Math.max(4,rnd(v,0.2))),
        mo6,inflow,outflow:outflow.map(v=>-v),
        supSpend:[38,22,12,14,8,4,2].map(v=>Math.max(2,rnd(v,0.2))),
        topCustomers:[
          {name:'Sibanye-Stillwater',val:rnd(892000,0.16)},{name:'Implats Mine Ops',val:rnd(648000,0.16)},
          {name:'Kumba Iron Ore',val:rnd(440000,0.16)},{name:'WBHO Construction',val:rnd(412000,0.16)},{name:'Exxaro Resources',val:rnd(285600,0.16)},
        ]});
    },500+Math.floor(Math.random()*500));
  });
}

function applyChartPayload(p){
  const _set=(ch,fn)=>{if(ch&&ch.data)try{fn(ch);}catch(e){}};
  _set(charts.revChart, ch=>{
    ch.data.labels=p.months;
    ch.data.datasets[0].data=p.rev;
    ch.data.datasets[1].data=p.col;
    ch.data.datasets[2].data=p.out;
  });
  _set(charts.donutChart,  ch=>{ ch.data.datasets[0].data=p.donut; });
  _set(charts.stackedBar,  ch=>{
    ch.data.labels=p.q;
    ch.data.datasets[0].data=p.mining;
    ch.data.datasets[1].data=p.eng;
    ch.data.datasets[2].data=p.con;
  });
  _set(charts.catPie,  ch=>{ ch.data.datasets[0].data=p.cat; });
  _set(charts.cashFlow, ch=>{
    ch.data.labels=p.mo6;
    ch.data.datasets[0].data=p.inflow;
    ch.data.datasets[1].data=p.outflow;
  });
  _set(charts.supSpend, ch=>{ ch.data.datasets[0].data=p.supSpend; });
  Object.values(charts).forEach(ch=>{ if(ch&&typeof ch.update==='function')ch.update(); });
  try{renderTopCustomers(p.topCustomers,'top-cust-bars');}catch(e){}
  try{renderTopCustomers(p.topCustomers,'top-cust-bars2');}catch(e){}
}

async function refreshChartsFromAjax(silent=false){
  const status=document.getElementById('analytics-status');
  if(status)status.textContent='Syncing…';
  try{
    const payload=await fetchAnalyticsPayload();
    try{ applyChartPayload(payload); }catch(e){ console.error('[charts] applyChartPayload failed:',e); }
    chartsBootstrapped=true;
    try{ updateAnalytics(); }catch(e){ console.error('[charts] updateAnalytics failed:',e); }
    if(status)status.textContent='Updated just now';
    if(!silent)nxNotify({title:'Analytics refreshed',type:'info'});
  }catch(e){
    console.error('[charts] refreshChartsFromAjax failed:',e);
    if(status)status.textContent='Feed unavailable';
  }
}

function readAnalyticsFilters(){
  return {
    from:document.getElementById('analytics-from')?.value||'',
    to:document.getElementById('analytics-to')?.value||'',
    year:document.getElementById('analytics-year')?.value||'',
    quarter:document.getElementById('analytics-quarter')?.value||'',
    month:document.getElementById('analytics-month')?.value||'',
    customerCode:document.getElementById('analytics-customer')?.value||'',
    supplierCode:document.getElementById('analytics-supplier')?.value||'',
    projectId:document.getElementById('analytics-project')?.value||'',
  };
}

function updateAnalyticsFiltersDropdowns(){
  const cust=document.getElementById('analytics-customer');
  const sup=document.getElementById('analytics-supplier');
  const proj=document.getElementById('analytics-project');
  if(cust){
    const cur=cust.value;
    cust.innerHTML='<option value="">All Customers</option>'+customers.map(c=>`<option value="${c.customerCode}">${c.companyName}</option>`).join('');
    if(cur&&[...cust.options].some(o=>o.value===cur))cust.value=cur;
  }
  if(sup){
    const cur=sup.value;
    sup.innerHTML='<option value="">All Suppliers</option>'+suppliers.map(s=>`<option value="${s.supplierCode}">${s.companyName}</option>`).join('');
    if(cur&&[...sup.options].some(o=>o.value===cur))sup.value=cur;
  }
  if(proj){
    const cur=proj.value;
    proj.innerHTML='<option value="">All Projects</option>'+projects.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
    if(cur&&[...proj.options].some(o=>o.value===cur))proj.value=cur;
  }
}

function updateAnalytics(){
  const status=document.getElementById('analytics-status');
  const filters=readAnalyticsFilters();
  const invRows=invoices.filter(inv=>{
    if(!matchDateFilters(inv.issued,filters))return false;
    if(filters.customerCode&&inv.customerCode!==filters.customerCode)return false;
    if(filters.projectId&&inv.projectId!==filters.projectId)return false;
    return true;
  });
  const poRows=purchaseOrders.filter(po=>{
    if(!matchDateFilters(po.ordered,filters))return false;
    if(filters.supplierCode&&po.supplierCode!==filters.supplierCode)return false;
    if(filters.projectId&&po.projectId!==filters.projectId)return false;
    return true;
  });
  const txnRows=companyTransactions.filter(txn=>{
    if(!matchDateFilters(txn.date,filters))return false;
    if(filters.customerCode&&txn.customerCode!==filters.customerCode)return false;
    if(filters.supplierCode&&txn.supplierCode!==filters.supplierCode)return false;
    if(filters.projectId&&txn.projectId!==filters.projectId)return false;
    return true;
  });
  const revenue=invRows.reduce((sum,r)=>sum+toNum(r.amount,0),0);
  const avgInv=invRows.length?revenue/invRows.length:0;
  const collected=invRows.reduce((sum,r)=>sum+toNum(r.paid,0),0);
  const collectionRate=revenue>0?Math.round((collected/revenue)*1000)/10:0;
  const overdueCount=invRows.filter(i=>i.status==='Overdue').length;
  const supplierSpend=poRows.reduce((sum,p)=>sum+toNum(p.value,0),0);
  const inflow=txnRows.filter(t=>t.type==='Inflow').reduce((sum,t)=>sum+toNum(t.amount,0),0);
  const outflow=txnRows.filter(t=>t.type==='Outflow').reduce((sum,t)=>sum+toNum(t.amount,0),0);
  const chips=[...document.querySelectorAll('#view-analytics .stat-chip')];
  const setChip=(label,val,color='')=>{
    const chip=chips.find(c=>c.querySelector('.stat-chip-lbl')?.textContent?.trim()===label);
    const valEl=chip?.querySelector('.stat-chip-val');
    if(valEl){
      valEl.textContent=val;
      if(color)valEl.style.color=color;
    }
  };
  setChip('Monthly Revenue',fmtShort(revenue),'var(--green)');
  setChip('Avg Invoice Value',fmtShort(avgInv),'var(--blue)');
  setChip('Collection Rate',`${collectionRate.toFixed(1)}%`,'var(--amber)');
  setChip('Overdue Invoices',String(overdueCount),'var(--red)');
  setChip('Supplier Spend YTD',fmtShort(supplierSpend),'var(--teal)');
  const net=inflow-outflow;
  // DSO = (Outstanding AR / Total Revenue) * Days in period (approx 90 for quarter)
  const totalRev=invRows.reduce((s,i)=>s+toNum(i.amount,0),0);
  const totalOut=invRows.reduce((s,i)=>s+Math.max(0,toNum(i.amount,0)-toNum(i.paid,0)),0);
  const dso=totalRev>0?Math.round((totalOut/totalRev)*90):0;
  setChip('Days Sales Outstanding',String(dso)+' days','var(--purple)');
  // New clients in selected period (default: current month)
  const fromDate=filters.from||(todayISO().slice(0,7)+'-01');
  const toDate=filters.to||todayISO();
  const newClientsCount=customers.filter(c=>{
    const joined=c.joinDate||c.createdAt||'';
    return joined>=fromDate&&joined<=toDate;
  }).length;
  setChip('New Clients MTD',String(newClientsCount),'var(--blue)');
  if(status)status.textContent=`Filtered: ${invRows.length} invoices, ${poRows.length} POs`;
  const top=invRows.reduce((acc,inv)=>{
    const key=inv.customerName||inv.customer||'Unknown';
    acc[key]=(acc[key]||0)+toNum(inv.amount,0);
    return acc;
  },{});
  const topRows=Object.entries(top).map(([name,val])=>({name,val})).sort((a,b)=>b.val-a.val).slice(0,5);
  renderTopCustomers(topRows.length?topRows:[{name:'No data',val:0}],'top-cust-bars2');
  // Top Sector: dominant customer industry by invoice revenue
  const sectorTotals={};
  invRows.forEach(inv=>{
    const cust=customers.find(c=>c.customerCode===inv.customerCode||c.companyName===(inv.customerName||inv.customer));
    const seg=cust?.industry||cust?.segment||'Other';
    sectorTotals[seg]=(sectorTotals[seg]||0)+toNum(inv.amount,0);
  });
  const topSector=Object.entries(sectorTotals).sort((a,b)=>b[1]-a[1])[0];
  const netChip=chips.find(c=>c.querySelector('.stat-chip-lbl')?.textContent?.trim()==='Top Sector');
  if(netChip){
    const v=netChip.querySelector('.stat-chip-val');
    if(v){v.textContent=topSector?topSector[0]:'N/A';v.style.color='var(--blue)';}
  }
  // Refresh active analytics sub-tab if not overview
  if(typeof _anTab!=='undefined' && _anTab && _anTab!=='overview'){
    try{ renderAnalyticsTab(_anTab); }catch(e){}
  }
}

function clearAnalyticsFilters(){
  ['analytics-from','analytics-to','analytics-year','analytics-quarter','analytics-month','analytics-customer','analytics-supplier','analytics-project']
    .forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  updateAnalytics();
}

// ============================================================
// NAV
// ============================================================

// ─── Dynamic viewMeta subtitle helpers ──────────────────────────────────────
function _dashSubtitle(){
  const now=new Date();
  const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const fy=now.getMonth()>=2?now.getFullYear():now.getFullYear()-1; // SA FY: March–Feb
  const q=quarterOfMonth(now.getMonth()+1);
  return `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} &middot; FY${fy} ${q}`;
}
function _custSubtitle(){
  const active=customers.filter(c=>c.status==='Active').length;
  const segs=[...new Set(customers.map(c=>c.industry||c.segment).filter(Boolean))].slice(0,3).join(', ');
  return `${active} active account${active!==1?'s':''} &middot; ${segs||'Multiple sectors'}`;
}
function _supSubtitle(){
  const active=suppliers.filter(s=>s.status==='Active').length;
  const total=suppliers.length;
  return `${active} active of ${total} supply partner${total!==1?'s':''}`;
}
function _catSubtitle(){
  return `${products.length} product${products.length!==1?'s':''} &middot; ${services.length} service${services.length!==1?'s':''}`;
}
// ─────────────────────────────────────────────────────────────────────────────
const viewMeta={
  dashboard:{title:'Overview',sub:_dashSubtitle(),btn:'+ New Invoice',action:()=>openModal('modal-invoice')},
  customers:{title:'Customers',sub:_custSubtitle(),btn:'+ Add Customer',action:()=>openModal('modal-customer')},
  quotes:{title:'Quotes',sub:'Quote pipeline — Draft → Sent → Accepted → Project created',btn:'+ New Quote',action:()=>openQuoteModal()},
  projects:{title:'Projects',sub:'Project budgeting, procurement and invoicing linkages',btn:'+ Add Project',action:()=>openModal('modal-project')},
  suppliers:{title:'Suppliers',sub:_supSubtitle(),btn:'+ Add Supplier',action:()=>openModal('modal-supplier')},
  products:{title:'Products & Services Catalogue',sub:_catSubtitle(),btn:'+ Add Item',action:()=>{const t=document.querySelector('.tabs .tab.active')?.textContent||'';openModal(t==='Services'?'modal-service':'modal-product');}},
  invoices:{title:'Invoices',sub:'Tax invoices with product & service line items',btn:'+ New Invoice',action:()=>openModal('modal-invoice')},
  'purchase-orders':{title:'Purchase Orders',sub:'Linked to suppliers and product catalogue',btn:'+ New PO',action:()=>openModal('modal-po')},
  statements:{title:'Account Statements',sub:'Customer-level statements (invoices + payments)',btn:'Export Report',action:()=>exportStatements()},
  transactions:{title:'Transactions',sub:'Company-wide cashflow inflow/outflow',btn:'+ Add Transaction',action:()=>openModal('modal-transaction')},
  analytics:{title:'Analytics & Reports',sub:'Mining / Engineering / Construction business intelligence',btn:'&#8635; Refresh',action:()=>refreshChartsFromAjax()},
  tracking:{title:'Project Tracking',sub:'Task board, Gantt, milestones and risk register',btn:'+ Add Task',action:()=>openPTKAddTask()},
  settings:{title:'Settings',sub:'System preferences and admin quick controls',btn:'Open Admin',action:()=>openView('admin')},
  admin:{title:'Administration',sub:'Users, permissions and system controls',btn:'+ Add User',action:()=>openModal('modal-admin-user')},
  'construction-hub':{title:'Construction Hub',sub:'Live site command centre',btn:'',action:()=>{}},
};
function openView(v){
  const item=document.querySelector(`.nav-item[data-view="${v}"]`);
  if(item)item.click();
}
document.querySelectorAll('.nav-item').forEach(item=>{
  item.addEventListener('click',()=>{
    const v=item.dataset.view;
    document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));item.classList.add('active');
    document.querySelectorAll('.view').forEach(vw=>vw.classList.remove('active'));
    document.getElementById('view-'+v).classList.add('active');
    const m=viewMeta[v];
    document.getElementById('page-title').innerHTML=m.title;
    document.getElementById('page-sub').innerHTML=typeof m.sub==='function'?m.sub():m.sub;
    const btn=document.getElementById('action-btn');
    if(btn){btn.innerHTML=m.btn;btn.style.display=m.btn?'flex':'none';btn.onclick=m.action;}
    if(v==='analytics'){
      if(!chartsBootstrapped)refreshChartsFromAjax(true);
      updateAnalytics();
    }
    if(v==='transactions')renderTransactions();
    if(v==='statements')renderStatements();
    if(v==='tracking'){
      ptkSyncDropdown();
      ptkRenderAll();
      // Ensure the active panel is visible (may have been hidden by a previous tab switch)
      const activeTab=_ptkTab||'board';
      const activeTabBtn=document.getElementById('ptk-tab-btn-'+activeTab);
      ptkSwitchTab(activeTab,activeTabBtn);
    }
  });
});

// ============================================================
// MODAL HELPERS
// ============================================================
function applyModalDefaults(id){
  if(id==='modal-customer'&&editState.type!=='customer'){
    document.getElementById('cust-name').value='';
    document.getElementById('cust-contact').value='';
    document.getElementById('cust-email').value='';
    document.getElementById('cust-phone').value='';
    document.getElementById('cust-segment').value='Mining';
    document.getElementById('cust-credit').value='';
    document.getElementById('cust-terms').value='Net 30';
    document.getElementById('cust-tax').value='';
    document.getElementById('cust-address').value='';
    document.getElementById('cust-delivery-address').value='';
    const next=extractMaxNumericCode(customers,'customerCode','CUST-')+1;
    document.getElementById('cust-code').value=nextCode('CUST-',next,3);
    document.getElementById('cust-status').value='Active';
  }
  if(id==='modal-supplier'&&editState.type!=='supplier'){
    document.getElementById('sup-name').value='';
    document.getElementById('sup-contact').value='';
    document.getElementById('sup-email').value='';
    document.getElementById('sup-phone').value='';
    document.getElementById('sup-lead').value='';
    document.getElementById('sup-vat').value='';
    document.getElementById('sup-address').value='';
    document.getElementById('sup-dispatch-address').value='';
    const next=extractMaxNumericCode(suppliers,'supplierCode','SUP-')+1;
    document.getElementById('sup-code').value=nextCode('SUP-',next,3);
    document.getElementById('sup-status').value='Active';
  }
  if(id==='modal-service'&&editState.type!=='service'){
    document.getElementById('svc-name').value='';
    document.getElementById('svc-code').value='';
    document.getElementById('svc-rate').value='';
    document.getElementById('svc-unit').value='';
    document.getElementById('svc-desc').value='';
    document.getElementById('svc-rate-type').value='hourly';
    document.getElementById('svc-supplier').value='';
  }
  if(id==='modal-product'&&editState.type!=='product'){
    document.getElementById('prod-name').value='';
    document.getElementById('prod-sku').value='';
    document.getElementById('prod-price').value='';
    document.getElementById('prod-stock').value='';
    document.getElementById('prod-reorder').value='10';
    document.getElementById('prod-desc').value='';
    document.getElementById('prod-supplier').value='';
  }
  if(id==='modal-invoice'){
    if(editState.type!=='invoice'){
      document.getElementById('inv-customer').value='';
      document.getElementById('inv-project').value='';
      document.getElementById('inv-issued').value=todayISO();
      const dueDate=new Date();
      dueDate.setDate(dueDate.getDate()+30);
      document.getElementById('inv-due').value=dueDate.toISOString().slice(0,10);
      document.getElementById('inv-tax').value=appConfig.vatRate;
      document.getElementById('inv-terms').value=appConfig.defaultPaymentTerms;
      document.getElementById('inv-lines-body').innerHTML='';
      invLineCount=0;
      addInvLine();
    }
    onInvoiceCustomerChange();
  }
  if(id==='modal-po'){
    if(editState.type!=='po'){
      document.getElementById('po-supplier').value='';
      document.getElementById('po-project').value='';
      document.getElementById('po-ordered').value=todayISO();
      document.getElementById('po-lines-body').innerHTML='';
      poLineCount=0;
      addPOLine();
    }
    onPOSupplierChange();
  }
  if(id==='modal-project'&&!projectEditId){
    const year=new Date().getFullYear();
    const next=Math.max(0,...projects.map(p=>toNum(String(p.id||'').split('-').pop(),0)))+1;
    document.getElementById('proj-name').value='';
    document.getElementById('proj-code').value=`PROJ-${year}-${String(next).padStart(3,'0')}`;
    document.getElementById('proj-status').value='Planned';
    document.getElementById('proj-customer').value='';
    document.getElementById('proj-site').value='';
    document.getElementById('proj-manager').value='';
    document.getElementById('proj-start').value=todayISO();
    document.getElementById('proj-end').value=todayISO();
    document.getElementById('proj-budget').value='';
  }
}
function openModal(id){
  applyModalDefaults(id);
  document.getElementById(id).classList.add('open');
}
function resetEditContext(id){
  if(['modal-customer','modal-supplier','modal-product','modal-service','modal-invoice','modal-po'].includes(id)){editState={type:null,id:null};}
  if(id==='modal-admin-user'){adminEditId=null;}
  if(id==='modal-project'){projectEditId=null;}
  if(id==='modal-customer'){document.querySelector('#modal-customer .modal-title').textContent='Add Customer';document.querySelector('#modal-customer .btn-primary').textContent='Add Customer';}
  if(id==='modal-supplier'){document.querySelector('#modal-supplier .modal-title').textContent='Add Supplier';document.querySelector('#modal-supplier .btn-primary').textContent='Add Supplier';}
  if(id==='modal-product'){document.querySelector('#modal-product .modal-title').textContent='Add Product';document.querySelector('#modal-product .btn-primary').textContent='Add Product';}
  if(id==='modal-service'){document.querySelector('#modal-service .modal-title').textContent='Add Service';document.querySelector('#modal-service .btn-primary').textContent='Add Service';}
  if(id==='modal-invoice'){document.querySelector('#modal-invoice .modal-title').textContent='New Invoice';document.querySelector('#modal-invoice .btn-primary').textContent='Create Invoice';}
  if(id==='modal-po'){document.querySelector('#modal-po .modal-title').textContent='New Purchase Order';document.querySelector('#modal-po .btn-primary').textContent='Create PO';}
  if(id==='modal-project'){document.querySelector('#modal-project .modal-title').textContent='Add Project';document.querySelector('#modal-project .btn-primary').textContent='Save Project';}
}
function closeModal(id){document.getElementById(id).classList.remove('open');resetEditContext(id);}
function closeModalOutside(e,id){if(e.target.id===id)closeModal(id);}
function openCreateModal(){const v=document.querySelector('.nav-item.active')?.dataset.view||'dashboard';(viewMeta[v]?.action||(() =>openModal('modal-invoice')))();}
function openDetailModal(title,sub,body,extraActions){
  document.getElementById('detail-title').innerHTML=title;
  document.getElementById('detail-sub').innerHTML=sub;
  document.getElementById('detail-body').innerHTML=body;
  const ea=document.getElementById('detail-extra-actions');
  if(ea)ea.innerHTML=extraActions||'';
  openModal('modal-detail');
}
function saveDraft(){closeModal('modal-invoice');nxNotify({title:'Invoice saved as draft',type:'success'});}
function addPaymentStatement(inv,amount,note){
  const ref='PMT-'+String(Math.floor(4000+Math.random()*5000));
  statements.unshift({date:todayISO(),ref,desc:`Payment received – ${inv.customer}${note?` (${note})`:''}`,debit:0,credit:amount,bal:Math.max(0,inv.amount-inv.paid),status:'Cleared'});
  payments.unshift({id:ref,customerCode:inv.customerCode||'',customerName:inv.customerName||inv.customer,date:todayISO(),amount:Math.max(0,toNum(amount,0)),note:note||''});
  paymentAllocations.unshift({id:`ALLOC-${Date.now()}`,paymentId:ref,invoiceId:inv.id,allocatedAmount:Math.max(0,toNum(amount,0)),date:todayISO()});
  if(paymentAllocations.filter(a=>a.invoiceId===inv.id).reduce((s,a)=>s+toNum(a.allocatedAmount,0),0)>toNum(inv.amount,0)){
    nxNotify({title:'Over-allocation prevented',type:'error'});
    return;
  }
  recordCompanyTransaction({
    date:todayISO(),
    ref,
    type:'Inflow',
    category:'Customer Payment',
    party:inv.customerName||inv.customer,
    customerCode:inv.customerCode||'',
    projectId:inv.projectId||'',
    description:`Payment received for ${inv.id}`,
    amount
  });
}
function openInvoicePayment(id){
  const inv=invoices.find(x=>x.id===id);if(!inv)return;
  const remaining=Math.max(0,inv.amount-inv.paid);
  document.getElementById('inv-pay-id').value=inv.id;
  document.getElementById('inv-pay-ref').textContent=inv.id;
  document.getElementById('inv-pay-customer').textContent=inv.customerName||inv.customer;
  document.getElementById('inv-pay-total').textContent=fmt(inv.amount);
  document.getElementById('inv-pay-paid').textContent=fmt(inv.paid);
  document.getElementById('inv-pay-remaining').textContent=fmt(remaining);
  document.getElementById('inv-pay-mode').value='partial';
  document.getElementById('inv-pay-amount').value=remaining>0?remaining:0;
  document.getElementById('inv-pay-note').value='';
  openModal('modal-invoice-payment');
}
function syncInvoicePaymentAmount(){
  const id=document.getElementById('inv-pay-id').value;
  const inv=invoices.find(x=>x.id===id);if(!inv)return;
  const remaining=Math.max(0,inv.amount-inv.paid);
  if(document.getElementById('inv-pay-mode').value==='full')document.getElementById('inv-pay-amount').value=remaining;
}
function applyInvoicePayment(){
  const id=document.getElementById('inv-pay-id').value;
  const inv=invoices.find(x=>x.id===id);if(!inv)return;
  const remaining=Math.max(0,inv.amount-inv.paid);
  let amount=Number(document.getElementById('inv-pay-amount').value||0);
  if(document.getElementById('inv-pay-mode').value==='full')amount=remaining;
  if(amount<=0){nxNotify({title:'Enter payment amount',type:'info'});return;}
  if(amount>remaining){nxNotify({title:'Amount exceeds remaining balance',type:'info'});return;}
  inv.paid=Math.round((inv.paid+amount)*100)/100;
  inv.status=computeInvoiceStatus(inv);
  addPaymentStatement(inv,amount,document.getElementById('inv-pay-note').value.trim());
  logActivity('payment_received',`Payment ${fmt(amount)} received for ${inv.id}`,inv.id);
  nxProgressSim('Saving Invoice...','Writing to data store',()=>{
    triggerUpdate();
  },600);
  closeModal('modal-invoice-payment');
  showToast(`Payment ${fmt(amount)} applied to ${inv.id}`);
}
function openPOReceipt(id){
  const po=purchaseOrders.find(x=>x.id===id);if(!po)return;
  const outstanding=Math.max(0,po.value-po.received);
  document.getElementById('po-receive-id').value=po.id;
  document.getElementById('po-receive-ref').textContent=po.id;
  document.getElementById('po-receive-supplier').textContent=po.supplier;
  document.getElementById('po-receive-total').textContent=fmt(po.value);
  document.getElementById('po-receive-received').textContent=fmt(po.received);
  document.getElementById('po-receive-outstanding').textContent=fmt(outstanding);
  document.getElementById('po-receive-mode').value='partial';
  document.getElementById('po-receive-amount').value=outstanding>0?outstanding:0;
  document.getElementById('po-receive-note').value='';
  openModal('modal-po-receipt');
}
function syncPOReceiveAmount(){
  const id=document.getElementById('po-receive-id').value;
  const po=purchaseOrders.find(x=>x.id===id);if(!po)return;
  const outstanding=Math.max(0,po.value-po.received);
  if(document.getElementById('po-receive-mode').value==='full')document.getElementById('po-receive-amount').value=outstanding;
}
function applyPOReceipt(){
  const id=document.getElementById('po-receive-id').value;
  const po=purchaseOrders.find(x=>x.id===id);if(!po)return;
  const outstanding=Math.max(0,po.value-po.received);
  let amount=Number(document.getElementById('po-receive-amount').value||0);
  if(document.getElementById('po-receive-mode').value==='full')amount=outstanding;
  if(amount<=0){nxNotify({title:'Enter received amount',type:'info'});return;}
  if(amount>outstanding){nxNotify({title:'Amount exceeds outstanding value',type:'info'});return;}
  po.received=Math.round((po.received+amount)*100)/100;
  po.status=computePOStatus(po);
  recordCompanyTransaction({
    date:todayISO(),
    ref:`PAY-${po.id}`,
    type:'Outflow',
    category:'Supplier Payment',
    party:po.supplierName||po.supplier,
    supplierCode:po.supplierCode||'',
    projectId:po.projectId||'',
    description:`Receipt/payment captured for ${po.id}`,
    amount
  });
  logActivity('transaction_recorded',`Supplier outflow ${fmt(amount)} captured for ${po.id}`,po.id);
  nxProgressSim('Saving Purchase Order...','Writing to data store',()=>{
    triggerUpdate();
  },600);
  closeModal('modal-po-receipt');
  showToast(`Receipt ${fmt(amount)} captured for ${po.id}`);
}
function openStatusModal(type,id){
  if(!requirePermission('update_doc_status','Update document status'))return;
  const isInvoice=type==='invoice';
  const record=isInvoice?invoices.find(x=>x.id===id):purchaseOrders.find(x=>x.id===id);
  if(!record)return;
  const opts=isInvoice?['Draft','Sent','Overdue','Partial','Paid']:['Draft','Approved','Issued','Partial','Received'];
  document.getElementById('status-update-type').value=type;
  document.getElementById('status-update-id').value=id;
  document.getElementById('status-update-sub').textContent=`${isInvoice?'Invoice':'Purchase Order'} ${id}`;
  const sel=document.getElementById('status-update-value');
  sel.innerHTML=opts.map(s=>`<option>${s}</option>`).join('');
  sel.value=record.status;
  openModal('modal-status-update');
}
function applyStatusUpdate(){
  const type=document.getElementById('status-update-type').value;
  const id=document.getElementById('status-update-id').value;
  const next=document.getElementById('status-update-value').value;
  if(type==='invoice'){
    const inv=invoices.find(x=>x.id===id);if(!inv)return;
    inv.status=next;
    if(next==='Paid'&&inv.paid<inv.amount)inv.paid=inv.amount;
  }else{
    const po=purchaseOrders.find(x=>x.id===id);if(!po)return;
    po.status=next;
    if(next==='Received'&&po.received<po.value)po.received=po.value;
  }
  normalizeBusinessStatuses();
  logActivity('status_updated',`${type.toUpperCase()} ${id} status changed to ${next}`,id);
  addAudit('STATUS','Documents',`Updated ${type.toUpperCase()} ${id} to ${next}`);
  triggerUpdate();
  closeModal('modal-status-update');
  nxNotify({title:'Status Updated',type:'success'});
}
function exportStatements(){
  const sel=document.getElementById('stmt-cust');
  const name=sel?.value||'All Customers';
  if(name==='All Customers')exportStatementPDF(null);
  else{
    const cust=customers.find(c=>c.companyName===name);
    const row=getStatementRowsByCustomer(cust?.customerCode||'')[0];
    exportStatementPDF(row?.ref||null);
  }
}
const EMAIL_API_URL = 'http://localhost:3055/send-email';
async function sendViaEmailGateway({to,subject,html,text}){
  const res=await fetch(EMAIL_API_URL,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({to,subject,html,text})
  });
  if(!res.ok){
    const err=await res.json().catch(()=>({error:'Unknown email gateway error'}));
    throw new Error(err.error||'Email send failed');
  }
  return res.json().catch(()=>({ok:true}));
}
function findCustomerEmail(customerCode, customerName){
  const c=customers.find(x=>x.customerCode===customerCode)||customers.find(x=>x.companyName===customerName);
  return c?.email||'';
}
function findSupplierEmail(supplierCode, supplierName){
  const s=suppliers.find(x=>x.supplierCode===supplierCode)||suppliers.find(x=>x.companyName===supplierName);
  return s?.email||'';
}
async function sendInvoiceEmail(invId){
  const inv=invoices.find(x=>x.id===invId);
  if(!inv){nxNotify({title:'Invoice not found',type:'error'});return;}
  const to=findCustomerEmail(inv.customerCode, inv.customerName||inv.customer);
  if(!to){nxNotify({title:'Customer email missing',sub:'Add customer email before sending.',type:'error'});return;}
  const outstanding=Math.max(0,toNum(inv.amount,0)-toNum(inv.paid,0));
  const subject=`Invoice ${inv.id} - ${inv.customerName||inv.customer}`;
  const html=`<div style="font-family:Segoe UI,Arial,sans-serif">
    <h2 style="margin:0 0 10px;color:#1e3a5f">NexusERP Invoice</h2>
    <p>Please find invoice details below.</p>
    <table style="border-collapse:collapse;width:100%;max-width:560px">
      <tr><td style="padding:6px;border:1px solid #ddd">Invoice</td><td style="padding:6px;border:1px solid #ddd">${inv.id}</td></tr>
      <tr><td style="padding:6px;border:1px solid #ddd">Issue Date</td><td style="padding:6px;border:1px solid #ddd">${inv.issued}</td></tr>
      <tr><td style="padding:6px;border:1px solid #ddd">Due Date</td><td style="padding:6px;border:1px solid #ddd">${inv.due}</td></tr>
      <tr><td style="padding:6px;border:1px solid #ddd">Amount</td><td style="padding:6px;border:1px solid #ddd">${fmt(inv.amount)}</td></tr>
      <tr><td style="padding:6px;border:1px solid #ddd">Outstanding</td><td style="padding:6px;border:1px solid #ddd">${fmt(outstanding)}</td></tr>
      <tr><td style="padding:6px;border:1px solid #ddd">Status</td><td style="padding:6px;border:1px solid #ddd">${inv.status}</td></tr>
    </table>
    <p style="margin-top:12px">Regards,<br>NexusERP Finance Team</p>
  </div>`;
  const nid=nxNotify({title:'Sending invoice email?',sub:`${inv.id} -> ${to}`,type:'info',loading:true});
  try{
    await sendViaEmailGateway({to,subject,html,text:`Invoice ${inv.id} | Amount ${fmt(inv.amount)} | Outstanding ${fmt(outstanding)}`});
    nxDismiss(nid);
    nxNotify({title:`Invoice ${inv.id} sent`,sub:to,type:'success'});
    logActivity('transaction_recorded',`Invoice email sent: ${inv.id}`,inv.id);
  }catch(err){
    nxDismiss(nid);
    nxNotify({title:'Invoice email failed',sub:err.message,type:'error'});
  }
}
async function sendPOEmail(poId){
  const po=purchaseOrders.find(x=>x.id===poId);
  if(!po){nxNotify({title:'PO not found',type:'error'});return;}
  const to=findSupplierEmail(po.supplierCode, po.supplierName||po.supplier);
  if(!to){nxNotify({title:'Supplier email missing',sub:'Add supplier email before sending.',type:'error'});return;}
  const subject=`Purchase Order ${po.id} - ${po.supplierName||po.supplier}`;
  const html=`<div style="font-family:Segoe UI,Arial,sans-serif">
    <h2 style="margin:0 0 10px;color:#92400e">NexusERP Purchase Order</h2>
    <table style="border-collapse:collapse;width:100%;max-width:560px">
      <tr><td style="padding:6px;border:1px solid #ddd">PO</td><td style="padding:6px;border:1px solid #ddd">${po.id}</td></tr>
      <tr><td style="padding:6px;border:1px solid #ddd">Ordered</td><td style="padding:6px;border:1px solid #ddd">${po.ordered}</td></tr>
      <tr><td style="padding:6px;border:1px solid #ddd">Expected</td><td style="padding:6px;border:1px solid #ddd">${po.expected}</td></tr>
      <tr><td style="padding:6px;border:1px solid #ddd">Value</td><td style="padding:6px;border:1px solid #ddd">${fmt(po.value)}</td></tr>
      <tr><td style="padding:6px;border:1px solid #ddd">Status</td><td style="padding:6px;border:1px solid #ddd">${po.status}</td></tr>
    </table>
    <p style="margin-top:12px">Regards,<br>NexusERP Procurement Team</p>
  </div>`;
  const nid=nxNotify({title:'Sending PO email?',sub:`${po.id} -> ${to}`,type:'info',loading:true});
  try{
    await sendViaEmailGateway({to,subject,html,text:`Purchase Order ${po.id} | Value ${fmt(po.value)} | Status ${po.status}`});
    nxDismiss(nid);
    nxNotify({title:`PO ${po.id} sent`,sub:to,type:'success'});
    logActivity('transaction_recorded',`PO email sent: ${po.id}`,po.id);
  }catch(err){
    nxDismiss(nid);
    nxNotify({title:'PO email failed',sub:err.message,type:'error'});
  }
}
async function sendStatements(){
  const sel=document.getElementById('stmt-cust');
  const selected=sel?.value||'All Customers';
  const targetCustomers=selected==='All Customers'
    ? customers.filter(c=>getStatementRowsByCustomer(c.customerCode).length>0)
    : customers.filter(c=>c.companyName===selected);
  if(!targetCustomers.length){nxNotify({title:'No customers with statement data',type:'warning'});return;}
  const nid=nxNotify({title:'Sending statements...',sub:`${targetCustomers.length} customer(s)`,type:'info',loading:true});
  let ok=0, failed=0;
  for(const c of targetCustomers){
    const to=c.email||'';
    if(!to){failed++;continue;}
    const rows=getStatementRowsByCustomer(c.customerCode);
    const debit=rows.reduce((s,r)=>s+toNum(r.debit,0),0);
    const credit=rows.reduce((s,r)=>s+toNum(r.credit,0),0);
    const balance=Math.max(0,debit-credit);
    const subject=`Statement - ${c.companyName}`;
    const html=`<div style="font-family:Segoe UI,Arial,sans-serif">
      <h2 style="margin:0 0 10px;color:#1e3a5f">Account Statement</h2>
      <p><strong>${c.companyName}</strong> (${c.customerCode})</p>
      <p>Transactions: ${rows.length}<br>Total Invoiced: ${fmt(debit)}<br>Payments: ${fmt(credit)}<br>Closing Balance: ${fmt(balance)}</p>
      <p>Regards,<br>NexusERP Finance Team</p>
    </div>`;
    try{
      await sendViaEmailGateway({to,subject,html,text:`Statement ${c.companyName} | Balance ${fmt(balance)}`});
      ok++;
    }catch{
      failed++;
    }
  }
  nxDismiss(nid);
  if(ok>0){
    nxNotify({title:`Statements sent: ${ok}`,sub:failed?`${failed} failed`:'All successful',type:failed?'warning':'success'});
    logActivity('transaction_recorded',`Statements emailed (${ok} success, ${failed} failed)`,'STATEMENTS');
  }else{
    nxNotify({title:'Statement send failed',sub:'No emails were sent',type:'error'});
  }
}
function showNotifications(){renderNotifications();openModal('modal-notify');}

/* "
   NOTIFICATION ENGINE
   " */
const _nxTimers = new Map();
let _nxId = 0;

function showToast(msg, type, sub, duration) {
  // Legacy compat – map old single-arg calls
  return nxNotify({ title: msg, type: type||'success', sub: sub||'', duration: duration });
}

function nxNotify({ title='', sub='', type='success', duration=0, loading=false, id=null }) {
  const stack = document.getElementById('nexus-notif-stack');
  if (!stack) return null;

  // Determine auto-dismiss duration
  const autoMs = duration || (loading ? 0 : type==='error' ? 5000 : type==='warning' ? 4000 : 3500);

  // Icons
  const icons = { success:'&#9989;', error:'&#10060;', warning:'&#9888;&#65039;', info:'&#8505;&#65039;', loading:'' };

  const nid = id || ('nx-' + (++_nxId));

  // Remove existing with same id
  const existing = document.getElementById(nid);
  if (existing) { existing.remove(); clearTimeout(_nxTimers.get(nid)); }

  const el = document.createElement('div');
  el.id = nid;
  el.className = `nx-notif ${loading ? 'loading' : type}`;

  el.innerHTML = `
    ${loading
      ? '<div class="nx-notif-spinner"></div>'
      : `<div class="nx-notif-icon">${icons[type]||'&#9989;'}</div>`
    }
    <div class="nx-notif-body">
      <div class="nx-notif-title">${title}</div>
      ${sub ? `<div class="nx-notif-sub">${sub}</div>` : ''}
    </div>
    <button class="nx-notif-close" onclick="nxDismiss('${nid}')" title="Dismiss">&times;</button>`;

  stack.appendChild(el);

  // Auto-dismiss
  if (autoMs > 0) {
    const t = setTimeout(() => nxDismiss(nid), autoMs);
    _nxTimers.set(nid, t);
  }

  return nid;
}

function nxDismiss(nid) {
  const el = document.getElementById(nid);
  if (!el) return;
  clearTimeout(_nxTimers.get(nid));
  _nxTimers.delete(nid);
  el.classList.add('exiting');
  setTimeout(() => el.remove(), 210);
}

function nxUpdate(nid, opts) {
  nxDismiss(nid);
  setTimeout(() => nxNotify({ ...opts, id: nid }), 50);
}

// Progress overlay helpers
function nxProgressShow(title, sub) {
  const el = document.getElementById('nexus-progress-overlay');
  if (!el) return;
  document.getElementById('nexus-progress-title').textContent = title || 'Processing...';
  document.getElementById('nexus-progress-sub').textContent = sub || 'Please wait';
  document.getElementById('nexus-progress-bar').style.width = '0%';
  document.getElementById('nexus-progress-pct').textContent = '0%';
  el.style.display = 'flex';
}

function nxProgressSet(pct, sub) {
  const bar = document.getElementById('nexus-progress-bar');
  const pctEl = document.getElementById('nexus-progress-pct');
  const subEl = document.getElementById('nexus-progress-sub');
  if (bar) bar.style.width = Math.min(100, pct) + '%';
  if (pctEl) pctEl.textContent = Math.round(pct) + '%';
  if (sub && subEl) subEl.textContent = sub;
}

function nxProgressHide() {
  const el = document.getElementById('nexus-progress-overlay');
  if (el) el.style.display = 'none';
}

// Simulated progress for save/load operations
function nxProgressSim(title, sub, onDone, durationMs) {
  nxProgressShow(title, sub);
  const ms = durationMs || 900;
  const start = Date.now();
  const tick = () => {
    const pct = Math.min(95, ((Date.now() - start) / ms) * 100);
    nxProgressSet(pct);
    if (pct < 95) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  setTimeout(() => {
    nxProgressSet(100, 'Complete');
    setTimeout(() => {
      nxProgressHide();
      if (onDone) onDone();
    }, 300);
  }, ms);
}

function syncSessionUI(){
  const section=document.getElementById('admin-nav-section');
  const item=document.getElementById('admin-nav-item');
  const status=document.getElementById('session-status');
  const cur=document.getElementById('admin-current-user');
  if(status)status.textContent=currentUser?'Active':'Inactive';
  if(cur)cur.textContent=currentUser?`${currentUser.name} (${currentUser.role})`:'N/A';
  const showAdmin=currentUser&&currentUser.role==='Admin';
  if(section)section.style.display=showAdmin?'block':'none';
  if(item)item.style.display=showAdmin?'flex':'none';
}
function updateUserUI(){
  const u=currentUser||{name:'Guest User',role:'Finance',title:'Viewer',email:'guest@nexuserp.co.za'};
  const parts=u.name.split(' ').filter(Boolean);
  const initials=((parts[0]?.[0]||'G')+(parts[1]?.[0]||'U')).toUpperCase();
  document.getElementById('user-name').textContent=u.name;
  document.getElementById('user-role').textContent=`${u.title||u.role} · ${u.role}`;
  document.getElementById('user-avatar').textContent=initials;
  const roleAccess=document.getElementById('settings-role-access');
  if(roleAccess)roleAccess.textContent=u.role==='Admin'?'Finance/Manager/Admin (full)':`Finance/Manager/Admin (current: ${u.role})`;
  syncSessionUI();
}
function inferRoleByProfile(email, existingUser){
  if(existingUser?.role)return existingUser.role;
  const local=(email.split('@')[0]||'').toLowerCase();
  if(local.includes('admin')||local.includes('owner')||local.includes('ceo'))return 'Admin';
  if(local.includes('manager')||local.includes('pm')||local.includes('project'))return 'Manager';
  return 'Finance';
}
function roleTitle(role){
  if(role==='Admin')return 'System Administrator';
  if(role==='Manager')return 'Project Manager';
  if(role==='Finance')return 'Finance Controller';
  return 'Viewer';
}
function loginUser(){
  const email=document.getElementById('login-email').value.trim();
  const pw=document.getElementById('login-password').value;
  if(!email){ nxNotify({title:'Email required',sub:'Please enter your email address',type:'error'}); return; }
  // Show loading state
  const btn=document.querySelector('#modal-login .btn-primary');
  const origText=btn?btn.textContent:'';
  if(btn){btn.disabled=true;btn.textContent='Signing in...';}
  const nid=nxNotify({title:'Signing in...',sub:email,type:'info',loading:true});
  setTimeout(()=>{
    const existing=appUsers.find(x=>x.email.toLowerCase()===email.toLowerCase());
    const role=inferRoleByProfile(email, existing);
    const name=existing?.name||email.split('@')[0].replace('.', ' ');
    currentUser={id:existing?.id||('USR-'+String(Date.now()).slice(-4)),name:name.split(' ').map(x=>x?x[0].toUpperCase()+x.slice(1):x).join(' '),email,role,title:roleTitle(role),lastLogin:new Date().toLocaleString('en-ZA')};
    setCookie(SESSION_COOKIE,JSON.stringify(currentUser),1);
    sessionStorage.setItem(SESSION_COOKIE,JSON.stringify(currentUser));
    if(!existing)appUsers.unshift({...currentUser,status:'Active'});
    else existing.lastLogin=currentUser.lastLogin;
    updateUserUI();
    renderAdminUsers();
    addAudit('LOGIN','Auth',`User signed in: ${email}`);
    renderAuditLog();
    closeModal('modal-login');
    persistState();
    if(btn){btn.disabled=false;btn.textContent=origText;}
    nxDismiss(nid);
    nxNotify({title:'Welcome back, '+currentUser.name.split(' ')[0]+'!',sub:role+' · '+email,type:'success'});
  },800);
}
function restoreSession(){
  const s=sessionStorage.getItem(SESSION_COOKIE)||getCookie(SESSION_COOKIE);
  if(!s){openModal('modal-login');syncSessionUI();return;}
  try{currentUser=JSON.parse(s);}catch{currentUser=null;}
  if(currentUser){
    const match=appUsers.find(x=>x.email===currentUser.email);
    if(match)match.lastLogin=currentUser.lastLogin||new Date().toLocaleString('en-ZA');
    updateUserUI();
  }else{
    openModal('modal-login');
  }
}
function logoutUser(){
  addAudit('LOGOUT','Auth',`User signed out: ${currentUser?.email||'unknown'}`);
  renderAuditLog();
  currentUser=null;
  sessionStorage.removeItem(SESSION_COOKIE);
  delCookie(SESSION_COOKIE);
  syncSessionUI();
  openModal('modal-login');
}
function openProfileModal(){
  if(!currentUser){openModal('modal-login');return;}
  document.getElementById('profile-name').value=currentUser.name||'';
  document.getElementById('profile-email').value=currentUser.email||'';
  document.getElementById('profile-role').value=currentUser.role||'Finance';
  document.getElementById('profile-title').value=currentUser.title||currentUser.role||'';
  document.getElementById('profile-password').value='';
  openModal('modal-profile');
}
function saveProfile(){
  if(!currentUser)return;
  currentUser.name=document.getElementById('profile-name').value.trim()||currentUser.name;
  currentUser.email=document.getElementById('profile-email').value.trim()||currentUser.email;
  currentUser.role=document.getElementById('profile-role').value;
  currentUser.title=document.getElementById('profile-title').value.trim()||currentUser.title;
  const idx=appUsers.findIndex(x=>x.id===currentUser.id);
  if(idx>=0)appUsers[idx]={...appUsers[idx],name:currentUser.name,email:currentUser.email,role:currentUser.role};
  setCookie(SESSION_COOKIE,JSON.stringify(currentUser),1);
  sessionStorage.setItem(SESSION_COOKIE,JSON.stringify(currentUser));
  updateUserUI();
  renderAdminUsers();
  addAudit('UPDATE','Profile',`Updated profile for ${currentUser.email}`);
  renderAuditLog();
  closeModal('modal-profile');
  persistState();
  nxNotify({title:'Profile updated',type:'success'});
}
function editAdminUser(id){
  if(!requirePermission('admin_users','Edit admin user'))return;
  const u=appUsers.find(x=>x.id===id);if(!u)return;
  adminEditId=id;
  document.getElementById('admin-user-name').value=u.name;
  document.getElementById('admin-user-email').value=u.email;
  document.getElementById('admin-user-role').value=u.role;
  document.getElementById('admin-user-status').value=u.status||'Active';
  openModal('modal-admin-user');
}
function saveAdminUserFromForm(){
  if(!requirePermission('admin_users','Save admin user'))return;
  const name=document.getElementById('admin-user-name').value.trim();
  const email=document.getElementById('admin-user-email').value.trim();
  if(!name||!email){nxNotify({title:'Name and email required',type:'error'});return;}
  const role=document.getElementById('admin-user-role').value;
  const status=document.getElementById('admin-user-status').value;
  if(adminEditId){
    const idx=appUsers.findIndex(x=>x.id===adminEditId);
    if(idx>=0)appUsers[idx]={...appUsers[idx],name,email,role,status};
    addAudit('UPDATE','Users',`Updated user ${adminEditId}`);
  }else{
    const uid='USR-'+String(Date.now()).slice(-4);
    appUsers.unshift({id:uid,name,email,role,status,lastLogin:'Never'});
    addAudit('CREATE','Users',`Created user ${uid}`);
  }
  adminEditId=null;
  renderAdminUsers();
  renderAuditLog();
  closeModal('modal-admin-user');
  persistState();
  nxNotify({title:'User Saved',type:'success'});
}
function toggleAdminUserStatus(id){
  if(!requirePermission('admin_users','Toggle user status'))return;
  const u=appUsers.find(x=>x.id===id);if(!u)return;
  u.status=u.status==='Active'?'Inactive':'Active';
  addAudit('STATUS','Users',`${id} set to ${u.status}`);
  renderAdminUsers();renderAuditLog();persistState();
}
async function deleteAdminUser(id){
  if(!requirePermission('admin_users','Delete user'))return;
  try{await nxConfirm({title:'Delete Admin User',sub:'This user account will be permanently removed.',okLabel:'Delete User'})}catch{return;}
  appUsers=appUsers.filter(x=>x.id!==id);
  addAudit('DELETE','Users',`Deleted user ${id}`);
  renderAdminUsers();renderAuditLog();persistState();nxNotify({title:'User Deleted',type:'warning'});
}
function resetSessionData(){
  try{localStorage.removeItem(APP_STATE_KEY);}catch(e){} sessionStorage.removeItem(APP_STATE_KEY);
  nxNotify({title:'Session data reset. Reload app to restore defaults.',type:'info'});
}

// ============================================================
// INIT
// ============================================================

// ─── Demo Reset ─────────────────────────────────────────────────────────────
// Clears persisted state so the app reloads with clean seed data on next refresh
function resetToSeedData(){
  try{localStorage.removeItem(APP_STATE_KEY);}catch(e){}
  sessionStorage.removeItem(APP_STATE_KEY);
  nxNotify({title:'Demo Reset',sub:'Reloading with fresh seed data…',type:'info'});
  setTimeout(()=>location.reload(),1200);
}
// ─────────────────────────────────────────────────────────────────────────────
function initializeAppRuntime(){
  if(isAppBootstrapped)return;
  isAppBootstrapped=true;
  isAppInitializing=true;
  loadPersistedState();
  ensureCoreHistories();
  normalizeCoreDataModels();
  normalizeProjectsAndLinks();
  normalizeQuotes();
  ensureDocumentLines();
  ensureCustomerNotes();
  syncDocumentTransactions();
  syncStatementFromInvoices();
  normalizeBusinessStatuses();
  applyConfigToUI();
  ptkSyncDropdown();
  syncAllDropdowns();
  initCharts();
  restoreSession();
  updateUserUI();
  triggerUpdate({persist:true,refreshCharts:false});
  refreshChartsFromAjax(true);
  isAppInitializing=false;
}

window.App = window.App || {};
window.App.init = initializeAppRuntime;
window.exportPOPdf = exportPOPDF;
window.exportPOPDF = exportPOPDF;
document.addEventListener('DOMContentLoaded', () => {
  if(window.App&&typeof window.App.init==='function')window.App.init();
});
// window.onload removed: DOMContentLoaded is sufficient and prevents double-init


//  Row popover 
let _popover = null;
function showPopover(trigger, items) {
  // Close any existing popover
  if (_popover) { _popover.remove(); _popover = null; }

  const menu = document.createElement('div');
  menu.className = 'row-popover';
  menu.setAttribute('role','menu');

  items.forEach((item, idx) => {
    if (item.divider) {
      const hr = document.createElement('div');
      hr.className = 'row-popover-divider';
      menu.appendChild(hr);
      return;
    }
    const btn = document.createElement('button');
    btn.className = 'row-popover-item' + (item.danger ? ' danger' : '') + (item.checked ? ' checked' : '');
    btn.setAttribute('role','menuitem');
    // Icon mapping for common labels
    const iconMap = {
      'View':'&#128065;', 'Edit':'&#9998;', 'Delete':'&#128465;', 'Export PDF':'&#128438;',
      'Record Payment':'&#128179;', 'Send Email':'&#128231;', 'Approve':'&#10004;', 'Duplicate':'&#10697;',
      'Capture Receipt':'&#128230;', 'Update Status':'&#128260;', 'Add Payment':'&#128179;',
    };
    const icon = iconMap[item.label];
    btn.innerHTML = icon ? `<span style="font-size:13px;width:18px;text-align:center">${icon}</span>${item.label}` : item.label;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      closePopover();
      item.fn();
    });
    menu.appendChild(btn);
  });

  document.body.appendChild(menu);
  _popover = menu;

  // Position
  const r = trigger.getBoundingClientRect();
  const mh = menu.offsetHeight || 200;
  const mw = menu.offsetWidth || 180;
  const spaceBelow = window.innerHeight - r.bottom;
  const top = spaceBelow >= mh + 8 ? r.bottom + 4 : r.top - mh - 4;
  const left = Math.min(r.right - mw, window.innerWidth - mw - 8);
  menu.style.top = Math.max(8, top) + 'px';
  menu.style.left = Math.max(8, left) + 'px';

  function onOutsideClick(e) {
    if (_popover && !_popover.contains(e.target) && e.target !== trigger) {
      closePopover();
    }
  }
  function onKey(e) {
    if (e.key === 'Escape') closePopover();
    if (e.key === 'ArrowDown') {
      const items = [...menu.querySelectorAll('.row-popover-item')];
      const cur = document.activeElement;
      const idx = items.indexOf(cur);
      items[Math.min(items.length-1, idx+1)]?.focus();
      e.preventDefault();
    }
    if (e.key === 'ArrowUp') {
      const items = [...menu.querySelectorAll('.row-popover-item')];
      const cur = document.activeElement;
      const idx = items.indexOf(cur);
      items[Math.max(0, idx-1)]?.focus();
      e.preventDefault();
    }
  }

  setTimeout(() => {
    document.addEventListener('click', onOutsideClick, { capture: true });
    document.addEventListener('keydown', onKey);
    // Focus first item for keyboard nav
    menu.querySelector('.row-popover-item')?.focus();
  }, 0);

  menu._cleanup = () => {
    document.removeEventListener('click', onOutsideClick, { capture: true });
    document.removeEventListener('keydown', onKey);
  };
}

function closePopover() {
  if (!_popover) return;
  if (_popover._cleanup) _popover._cleanup();
  _popover.style.animation = 'nx-cmenu-out .12s ease forwards';
  const p = _popover;
  _popover = null;
  setTimeout(() => p.remove(), 120);
}


function rowMenu(btn, type, id, extra) {
  const defs = {
    customer: () => [
      { label: 'View',   fn: () => viewCustomer(id) },
      { label: 'Edit',   fn: () => editCustomer(id) },
      { divider: true },
      { label: 'Delete', fn: () => deleteCustomer(id), danger: true }
    ],
    supplier: () => [
      { label: 'View',   fn: () => viewSupplier(id) },
      { label: 'Edit',   fn: () => editSupplier(id) },
      { divider: true },
      { label: 'Delete', fn: () => deleteSupplier(id), danger: true }
    ],
    product: () => [
      { label: 'View',   fn: () => viewProduct(id) },
      { label: 'Edit',   fn: () => editProduct(id) },
      { divider: true },
      { label: 'Delete', fn: () => deleteProduct(id), danger: true }
    ],
    service: () => [
      { label: 'View',   fn: () => viewService(id) },
      { label: 'Edit',   fn: () => editService(id) },
      { divider: true },
      { label: 'Delete', fn: () => deleteService(id), danger: true }
    ],
    invoice: () => {
      const inv = invoices.find(x => x.id === id);
      const bal = inv ? Math.max(0, inv.amount - inv.paid) : 0;
      const acts = [
        { label: 'View Details',  fn: () => viewInvoice(id) },
        { label: 'Edit',          fn: () => editInvoice(id) },
        { label: 'Update Status', fn: () => openStatusModal('invoice', id) },
      ];
      if (bal > 0) acts.push({ label: 'Record Payment', fn: () => openInvoicePayment(id) });
      acts.push({ label: 'Send Email', fn: () => sendInvoiceEmail(id) });
      acts.push({ label: 'Export PDF', fn: () => exportInvoicePDF(id) });
      acts.push({ divider: true });
      acts.push({ label: 'Delete', fn: () => deleteInvoice(id), danger: true });
      return acts;
    },
    po: () => {
      const po = purchaseOrders.find(x => x.id === id);
      const bal = po ? Math.max(0, po.value - po.received) : 0;
      const acts = [
        { label: 'View Details',  fn: () => viewPO(id) },
        { label: 'Edit',          fn: () => editPO(id) },
        { label: 'Update Status', fn: () => openStatusModal('po', id) },
      ];
      if (bal > 0) acts.push({ label: 'Capture Receipt', fn: () => openPOReceipt(id) });
      acts.push({ label: 'Send Email', fn: () => sendPOEmail(id) });
      acts.push({ label: 'Export PDF', fn: () => exportPOPDF(id) });
      acts.push({ divider: true });
      acts.push({ label: 'Delete', fn: () => deletePO(id), danger: true });
      return acts;
    },
    quote: () => {
      const q = quotes.find(x => x.id === id);
      const acts = [{ label: 'View Details', fn: () => viewQuote(id) }];
      if (q && q.status === 'Accepted') acts.push({ label: '🧾 Convert to Invoice', fn: () => convertQuoteToInvoice(id) });
      if (q && q.status !== 'Accepted' && q.status !== 'Rejected') acts.push({ label: '✓ Accept', fn: () => acceptQuote(id) });
      if (q && (q.status === 'Draft' || q.status === 'Sent')) acts.push({ label: '↗ Send to Client', fn: () => sendQuote(id) });
      if (q && q.status !== 'Accepted' && q.status !== 'Rejected') acts.push({ label: '⟳ Amend', fn: () => amendQuote(id) });
      if (q && q.status !== 'Accepted') acts.push({ label: '✗ Reject', fn: () => rejectQuote(id) });
      acts.push({ label: 'Edit', fn: () => editQuote(id) });
      acts.push({ label: 'Export PDF', fn: () => exportQuotePDF(id) });
      acts.push({ divider: true });
      acts.push({ label: 'Delete', fn: () => deleteQuote(id), danger: true });
      return acts;
    },
    project: () => {
      const acts = [{ label: 'View', fn: () => viewProject(id) }];
      if (extra === 'In Progress') acts.push({ label: '\u{1F3D7} Construction Hub', fn: () => openConstructionHub(id) });
      acts.push({ label: 'Edit', fn: () => editProject(id) });
      acts.push({ divider: true });
      acts.push({ label: 'Delete', fn: () => deleteProject(id), danger: true });
      return acts;
    },
    statement: () => [
      { label: 'View',   fn: () => viewStatement(id) },
      { label: 'Export PDF', fn: () => exportStatementPDF(id) },
      { label: 'Edit',   fn: () => editStatement(id) },
      { divider: true },
      { label: 'Delete', fn: () => deleteStatement(id), danger: true }
    ],
    transaction: () => [
      { label: 'Edit',   fn: () => editTransaction(id) },
      { divider: true },
      { label: 'Delete', fn: () => deleteTransaction(id), danger: true }
    ],
    adminuser: () => [
      { label: 'Edit',   fn: () => editAdminUser(id) },
      { label: extra === 'Active' ? 'Disable' : 'Enable', fn: () => toggleAdminUserStatus(id) },
      { divider: true },
      { label: 'Delete', fn: () => deleteAdminUser(id), danger: true }
    ],
    tracking: () => [
      { label: 'View',        fn: () => viewTracking(id) },
      { label: 'Update Status', fn: () => openTrackingUpdate(id) },
      { label: 'Edit',        fn: () => openEditTracking(id) },
      { divider: true },
      { label: 'Delete',      fn: () => deleteTracking(id), danger: true },
    ],
  };
  showPopover(btn, (defs[type] || (() => []))());
}


//  Filter button popover 
function openFilterPopover(btn) {
  const sel = btn.nextElementSibling;
  if (!sel || sel.tagName !== 'SELECT') return;
  const items = Array.from(sel.options).map(opt => ({
    label: opt.text,
    checked: opt.value === sel.value,
    fn: () => {
      sel.value = opt.value;
      btn.querySelector('span').textContent = opt.text;
      btn.classList.toggle('active', sel.selectedIndex > 0);
      sel.dispatchEvent(new Event('change'));
    }
  }));
  showPopover(btn, items);
}

// Theme toggle
(function () {
  const btn  = document.getElementById('theme-toggle');
  const root = document.documentElement;

  const saved = localStorage.getItem('theme') || 'dark';
  if (saved === 'light') root.setAttribute('data-theme', 'light');

  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if (next === 'dark') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', next);
  });
})();

// Sidebar toggle
(function () {
  const toggle  = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    document.body.classList.add('sidebar-open');
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    document.body.classList.remove('sidebar-open');
  }

  // Open by default on desktop
  if (window.innerWidth >= 768) openSidebar();

  toggle.addEventListener('click', () =>
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar()
  );
  overlay.addEventListener('click', closeSidebar);

  // Close sidebar after nav on mobile
  document.querySelectorAll('.nav-item').forEach(item =>
    item.addEventListener('click', () => { if (window.innerWidth < 768) closeSidebar(); })
  );
})();


// ================================================================
// CONSTRUCTION HUB – embedded module
// ================================================================

let hubSelectedEquip = 0;
let hubEquipData = [];
let hubStaffData = [];
let hubActiveProject = null;
let hubClockTimer = null;

function initHubClock() {
  if (hubClockTimer) clearInterval(hubClockTimer);
  function tick() {
    const now = new Date();
    const el = document.getElementById('hubClock');
    if (el) el.textContent = [now.getHours(), now.getMinutes(), now.getSeconds()]
      .map(n => String(n).padStart(2, '0')).join(':');
  }
  tick();
  hubClockTimer = setInterval(tick, 1000);
}

function switchHubView(name, tabEl) {
  document.querySelectorAll('.hx-frame .hx-view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById('hxv-' + name);
  if (target) target.classList.add('active');
  document.querySelectorAll('.hx-frame .hx-tab').forEach(t => t.classList.remove('active'));
  if (tabEl) { tabEl.classList.add('active'); }
  else {
    const tabs = document.querySelectorAll('.hx-frame .hx-tab');
    const order = ['overview','staff','plant','engineering','map','financials'];
    const idx = order.indexOf(name);
    if (tabs[idx]) tabs[idx].classList.add('active');
  }
  if (name === 'financials' && hubActiveProject) renderHubFinancials(hubActiveProject);
  if (name === 'map' && hubActiveProject) renderHubFullMap(hubActiveProject);
}

function openConstructionHub(id) {
  const proj = findProjectById(id);
  if (!proj) { nxNotify({title:'Project not found',type:'warning'}); return; }

  hubActiveProject = proj;
  hubSelectedEquip = 0;
  hubEquipData = getHubEquipPool(proj);
  hubStaffData = getHubStaffPool(proj);

  // Show hub view — full-bleed takeover
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const hubView = document.getElementById('view-construction-hub');
  if (hubView) hubView.classList.add('active');
  document.body.classList.add('hub-mode');

  // Update topbar
  const pt = document.getElementById('page-title');
  if (pt) pt.textContent = proj.name;
  const ps = document.getElementById('page-sub');
  if (ps) ps.textContent = 'Construction Hub · ' + (proj.site || 'Active Site');
  const actionBtn = document.getElementById('action-btn');
  if (actionBtn) actionBtn.style.display = 'none';

  // Project header
  const projIdEl = document.getElementById('hubProjectId');
  if (projIdEl) projIdEl.textContent = proj.id;
  const projNameEl = document.getElementById('hubProjectName');
  if (projNameEl) projNameEl.textContent = proj.name;

  // User avatar
  const avatar = document.getElementById('hubUserAvatar');
  if (avatar) {
    const luName = currentUser ? currentUser.name : 'James Donaldson';
    avatar.textContent = luName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    avatar.title = luName;
  }

  // Budget / progress metrics
  const budgetUsed = proj.actualCost || 0;
  const budgetTotal = proj.budget || 1;
  const budgetPct = Math.min(99, Math.round((budgetUsed / budgetTotal) * 100));
  const progPct = proj.progress || Math.min(95, Math.max(10, budgetPct + hubRand(-8, 8)));

  // Alert counts
  const alertCount = hubEquipData.filter(e => e.status !== 'active').length;
  const rfiCount = hubRand(4, 10);
  const rfiUrgent = hubRand(1, 3);
  const activeEquip = hubEquipData.filter(e => e.status === 'active').length;

  // RAG
  const openRisks = alertCount + rfiUrgent;
  const rag = (openRisks > 3 || budgetPct > 90) ? 'RED' : (openRisks > 1 || progPct < 50) ? 'AMBER' : 'GREEN';

  // Alert badges
  const alertBadge = document.getElementById('hubAlertBadge');
  if (alertBadge) {
    alertBadge.textContent = alertCount > 0 ? '⚠ ' + alertCount + ' ALERT' + (alertCount > 1 ? 'S' : '') : '✓ NO ALERTS';
    alertBadge.style.background = alertCount > 0 ? 'rgba(239,68,68,.2)' : 'rgba(34,197,94,.15)';
    alertBadge.style.borderColor = alertCount > 0 ? 'rgba(239,68,68,.5)' : 'rgba(34,197,94,.4)';
    alertBadge.style.color = alertCount > 0 ? '#ef4444' : '#22c55e';
  }
  const plantBadge = document.getElementById('hubPlantAlertBadge');
  if (plantBadge) { plantBadge.textContent = alertCount; plantBadge.style.display = alertCount > 0 ? '' : 'none'; }

  // KPI values
  const setKpi = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  setKpi('kpi-budget-pct', budgetPct);
  const kBudgetMeta = document.getElementById('kpi-budget-meta');
  if (kBudgetMeta) {
    kBudgetMeta.textContent = (budgetPct > 80 ? '⚠ ' : '') + 'R' + (budgetUsed/1e6).toFixed(2) + 'M of R' + (budgetTotal/1e6).toFixed(1) + 'M';
    kBudgetMeta.className = 'hub-kpi-chg ' + (budgetPct > 80 ? 'warn' : 'up');
  }
  setKpi('kpi-staff', hubStaffData.length);
  setKpi('kpi-staff-meta', '+' + hubRand(1,5) + ' vs. yesterday');
  setKpi('kpi-plant', activeEquip);
  setKpi('kpi-plant-total', '/' + hubEquipData.length);
  if (kBudgetMeta) { /* already set */ }
  const kPlantMeta = document.getElementById('kpi-plant-meta');
  if (kPlantMeta) kPlantMeta.textContent = alertCount > 0 ? '⚠ ' + alertCount + ' maintenance due' : '✓ All operational';
  setKpi('kpi-rfis', rfiCount);
  const kRfiMeta = document.getElementById('kpi-rfi-meta');
  if (kRfiMeta) kRfiMeta.textContent = ' ' + hubRand(1,3) + ' closed today';
  setKpi('kpi-rfi-urgent', rfiUrgent + ' urgent');
  setKpi('kpi-prog', progPct);
  const kProgMeta = document.getElementById('kpi-prog-meta');
  if (kProgMeta) kProgMeta.textContent = progPct >= 70 ? ' On track' : progPct >= 50 ? ' Minor delays' : ' Behind schedule';
  setKpi('kpi-safety', hubRand(85, 180));

  // RAG tag (handled below with hubRagTag2)

  // Activity feed
  const actFeed = document.getElementById('hubActivityFeed');
  if (actFeed) {
    actFeed.innerHTML = getHubActivity(proj).map(a =>
      `<div class="hx-feed-item">
        <div class="hx-feed-dot" style="background:${a.color}"></div>
        <div class="hx-feed-body"><div class="hx-feed-title">${a.title}</div><div class="hx-feed-meta">${a.meta}</div></div>
        <div class="hx-feed-time">${a.time}</div>
      </div>`
    ).join('');
  }

  // Staff grid
  renderHubStaff(hubStaffData);

  // Equipment
  renderHubEquipment();

  // Gantt
  const ganttEl = document.getElementById('hubGanttChart');
  if (ganttEl) {
    ganttEl.innerHTML = getHubGanttTasks(proj).map(t =>
      `<div class="hx-gantt-row">
        <div class="hx-gantt-lbl" title="${t.label}">${t.label}</div>
        <div class="hx-gantt-track">
          <div class="hx-gantt-planned" style="left:${t.start}%;width:${t.width}%"></div>
          <div class="hx-gantt-actual" style="left:${t.start}%;width:calc(${t.width}% * ${parseFloat(t.pct)} / 100);background:${t.color}"></div>
        </div>
        <div class="hx-gantt-pct">${t.pct}</div>
      </div>`
    ).join('');
  }
  const ganttStatus = document.getElementById('hubGanttStatus');
  if (ganttStatus) ganttStatus.textContent = 'Overall Status: ' + rag;
  const ganttDelay = document.getElementById('hubGanttDelay');
  if (ganttDelay) {
    if (rag === 'GREEN') { ganttDelay.textContent = 'ON TRACK'; ganttDelay.className = 'hub-tag hub-tag-green'; }
    else if (rag === 'AMBER') { ganttDelay.textContent = hubRand(2,7) + ' DAYS BEHIND'; ganttDelay.className = 'hub-tag hub-tag-amber'; }
    else { ganttDelay.textContent = hubRand(8,15) + ' DAYS BEHIND'; ganttDelay.className = 'hub-tag hub-tag-red'; }
  }

  // RFI list
  const rfiList = document.getElementById('hubRfiList');
  if (rfiList) {
    const subjects = ['Structural beam specification','Concrete mix design approval','Waterproofing membrane spec','Steel reinforcement grade','MEP coordination clash','Fire suppression layout','Foundation depth variance','Cable routing conflict'];
    const rfis = Array.from({length: rfiCount}, (_, i) => ({
      id: 'RFI-' + String(rfiCount - i).padStart(3,'0'),
      subject: subjects[i % subjects.length],
      status: i < rfiUrgent ? 'urgent' : i < rfiUrgent + 2 ? 'open' : 'closed',
      date: i === 0 ? 'Today' : i === 1 ? 'Yesterday' : (i+1) + 'd ago'
    }));
    rfiList.innerHTML = rfis.map(r => {
      const col = r.status==='urgent'?'#ef4444':r.status==='open'?'#f5a623':'#22c55e';
      return `<div class="hx-rfi-item">
        <div class="hx-rfi-dot" style="background:${col}"></div>
        <div class="hx-rfi-id">${r.id}</div>
        <div class="hx-rfi-subj">${r.subject}</div>
        <span style="font-size:9px;font-family:'DM Mono',monospace;color:${col};margin-right:6px">${r.status.toUpperCase()}</span>
        <div class="hx-rfi-date">${r.date}</div>
      </div>`;
    }).join('');
    const rfiUrgentTag = document.getElementById('hubRfiUrgentTag');
    if (rfiUrgentTag) rfiUrgentTag.textContent = rfiUrgent + ' URGENT';
  }

  // Weather
  const weatherEl = document.getElementById('hubWeatherGrid');
  if (weatherEl) {
    const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const icons=['☀','☀','⛅','🌧','⛅','☀','☀'];
    const temps=[24,26,22,18,21,25,27];
    const todayIdx = ((new Date().getDay()+6)%7);
    weatherEl.innerHTML = days.map((d,i) =>
      `<div class="hx-wx-day${i===todayIdx?' today':''}">
        <div class="hx-wx-lbl">${d}</div>
        <div class="hx-wx-icon">${icons[i]}</div>
        <div class="hx-wx-temp">${temps[i]}°</div>
      </div>`
    ).join('');
  }

  // Site diary
  const diary = document.getElementById('hubDiaryText');
  if (diary) {
    const pm = proj.manager || 'Site Manager';
    diary.innerHTML = `<strong>${new Date().toLocaleDateString('en-ZA',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</strong><br><br>
Site diary compiled by ${pm}.<br><br>
Today’s progress: Concrete pour completed on Grid B4. ${hubStaffData.length} personnel on site. ${activeEquip} plant items operational.<br><br>
Weather: Clear conditions, 24°C. Suitable for all external works.<br><br>
Issues: ${alertCount > 0 ? 'Plant maintenance required for ' + alertCount + ' item(s). ' : 'No major plant issues. '}${rfiUrgent} RFI(s) awaiting engineer response.<br><br>
Tomorrow’s plan: Continue structural works Grid C2–C6. Rebar delivery expected 07:00.`;
  }

  // Map labels
  const mapSites = getHubMapSites(proj);
  const setEl = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  setEl('hubSiteLabel1', mapSites.label1); setEl('fmapLabel1', mapSites.label1);
  setEl('hubSiteLabel2', mapSites.label2); setEl('fmapLabel2', mapSites.label2);
  setEl('hubSiteLabel3', mapSites.label3); setEl('fmapLabel3', mapSites.label3);
  // Toolbar IDs
  setEl('hubMapProjectLabel', proj.id);
  setEl('hubMapSiteName', mapSites.siteName + ' – Live');
  setEl('hubMapCoords', mapSites.coords);
  setEl('hubMapStats', 'Staff: ' + hubStaffData.length + ' · Plant: ' + activeEquip + '/' + hubEquipData.length + ' · Progress: ' + progPct + '%');
  // Full-map card IDs (new map view)
  setEl('hubMapProjectLabel2', proj.id);
  setEl('hubMapSiteName2', mapSites.siteName + ' – Live');
  setEl('hubMapCoords2', mapSites.coords);
  setEl('hubMapStats2', 'Staff: ' + hubStaffData.length + ' · Plant: ' + activeEquip + '/' + hubEquipData.length + ' · Progress: ' + progPct + '%');
  // Timestamp
  const tsEl = document.getElementById('hubMapTimestamp');
  if (tsEl) { const n = new Date(); tsEl.textContent = 'LIVE · ' + n.getHours().toString().padStart(2,'0') + ':' + n.getMinutes().toString().padStart(2,'0') + ':' + n.getSeconds().toString().padStart(2,'0'); }

  // Full map alerts strip
  const alertsStrip = document.getElementById('hubFullMapAlerts');
  if (alertsStrip) {
    const items = hubEquipData.filter(e => e.status !== 'active').map(e =>
      `<span style="color:${e.status==='warn'?'#f5a623':'#ef4444'};margin-right:16px">⚠ ${e.name} – ${e.status==='warn'?'Maintenance Due':'SUSPENDED'}</span>`
    );
    alertsStrip.innerHTML = items.length > 0 ? items.join('') : '<span style="color:#22c55e">✓ All systems nominal</span>';
  }

  // Start clock and show overview tab
  initHubClock();
  // ── Budget donut gauge ──
  const circumference = 175.9;
  const arc = document.getElementById('budgetGaugeArc');
  if (arc) arc.style.strokeDashoffset = circumference - (circumference * budgetPct / 100);
  const gPct = document.getElementById('budgetGaugePct');
  if (gPct) gPct.textContent = budgetPct + '%';
  const gSpent = document.getElementById('gaugeSpent');
  if (gSpent) gSpent.textContent = 'R' + (budgetUsed/1e6).toFixed(2) + 'M';
  const gTotal = document.getElementById('gaugeTotal');
  if (gTotal) gTotal.textContent = 'of R' + (budgetTotal/1e6).toFixed(1) + 'M approved';
  // ── Programme mini bars ──
  const pbEl = document.getElementById('hubProgBars');
  if (pbEl) {
    const tasks = getHubGanttTasks(proj);
    pbEl.innerHTML = tasks.map(t => {
      const pct = parseFloat(t.pct) || 0;
      const col = pct >= 80 ? '#22c55e' : pct >= 40 ? '#f5a623' : '#3b82f6';
      return `<div class="hx-prog-row">
        <div class="hx-prog-lbl" title="${t.label}">${t.label}</div>
        <div class="hx-prog-track"><div class="hx-prog-fill" style="width:${pct}%;background:${col}"></div></div>
        <div class="hx-prog-pct">${pct}%</div>
      </div>`;
    }).join('');
  }
  // ── RAG tags ──
  ['hubRagTag','hubRagTag2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.textContent = 'RAG: ' + rag; el.className = 'hx-tag ' + (rag==='GREEN'?'hx-tag-g':rag==='AMBER'?'hx-tag-a':'hx-tag-r'); }
  });
  // ── Mini map ──
  renderHubMiniMap(proj, mapSites);
  // ── Show overview ──
  switchHubView('overview', null);
}


function renderHubMiniMap(proj, mapSites) {
  const wrap = document.getElementById('hubMiniMapWrap');
  if (!wrap) return;
  const isMining = /mine|shaft|mining|ventilation|reagent/i.test(proj.name + (proj.site||''));
  const s = mapSites || {};
  const l1 = s.label1||'Zone A', l2 = s.label2||'Zone B', l3 = s.label3||'Zone C';
  wrap.innerHTML = `<svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
    <defs>
      <pattern id="mmg" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0a1525" stroke-width=".8"/></pattern>
      <radialGradient id="mmgA" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#22c55e" stop-opacity=".2"/><stop offset="100%" stop-color="#22c55e" stop-opacity="0"/></radialGradient>
      <radialGradient id="mmgB" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f5a623" stop-opacity=".2"/><stop offset="100%" stop-color="#f5a623" stop-opacity="0"/></radialGradient>
      <radialGradient id="mmgC" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#3b82f6" stop-opacity=".18"/><stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="600" height="380" fill="#040810"/>
    <rect width="600" height="380" fill="url(#mmg)"/>
    <!-- Roads -->
    <path d="M0 190 Q150 182 280 198 Q420 216 550 185 Q580 182 600 184" stroke="#0c1e35" stroke-width="14" fill="none"/>
    <path d="M0 190 Q150 182 280 198 Q420 216 550 185 Q580 182 600 184" stroke="#152840" stroke-width="2" fill="none" stroke-dasharray="22 10"/>
    <path d="M300 0 Q294 120 308 198 Q318 265 302 380" stroke="#0c1e35" stroke-width="12" fill="none"/>
    <path d="M300 0 Q294 120 308 198 Q318 265 302 380" stroke="#152840" stroke-width="1.5" fill="none" stroke-dasharray="22 10"/>
    <path d="M0 85 Q120 78 220 92 Q350 108 480 78 Q540 66 600 74" stroke="#091828" stroke-width="8" fill="none"/>
    <!-- Zone A -->
    <ellipse cx="155" cy="140" rx="90" ry="70" fill="url(#mmgA)"/>
    <rect x="80" y="82" width="150" height="116" rx="6" fill="rgba(34,197,94,.04)" stroke="rgba(34,197,94,.22)" stroke-width="1.5" stroke-dasharray="6 4"/>
    <rect x="96" y="96" width="52" height="38" rx="3" fill="rgba(34,197,94,.07)" stroke="rgba(34,197,94,.2)" stroke-width="1"/>
    <rect x="160" y="92" width="60" height="44" rx="3" fill="rgba(34,197,94,.09)" stroke="rgba(34,197,94,.25)" stroke-width="1"/>
    <rect x="98" y="146" width="38" height="28" rx="2" fill="rgba(34,197,94,.06)" stroke="rgba(34,197,94,.15)" stroke-width="1"/>
    <circle class="hx-site-ping" cx="156" cy="140" r="16" fill="none" stroke="#22c55e" stroke-width="1.8" opacity=".7"/>
    <circle cx="156" cy="140" r="11" fill="rgba(34,197,94,.18)" stroke="#22c55e" stroke-width="1.8"/>
    <text x="156" y="144" font-family="DM Mono,monospace" font-size="9" fill="#22c55e" text-anchor="middle" font-weight="700" id="hubSiteLabel1">${l1}</text>
    <!-- Zone B -->
    <ellipse cx="450" cy="155" rx="95" ry="72" fill="url(#mmgB)"/>
    <rect x="368" y="96" width="164" height="118" rx="6" fill="rgba(245,166,35,.04)" stroke="rgba(245,166,35,.2)" stroke-width="1.5" stroke-dasharray="6 4"/>
    <rect x="382" y="110" width="58" height="42" rx="3" fill="rgba(245,166,35,.06)" stroke="rgba(245,166,35,.2)" stroke-width="1"/>
    <rect x="452" y="106" width="70" height="48" rx="3" fill="rgba(245,166,35,.08)" stroke="rgba(245,166,35,.25)" stroke-width="1"/>
    <rect x="384" y="162" width="44" height="30" rx="2" fill="rgba(245,166,35,.05)" stroke="rgba(245,166,35,.15)" stroke-width="1"/>
    <circle class="hx-site-ping" cx="450" cy="155" r="16" fill="none" stroke="#f5a623" stroke-width="1.8" opacity=".7" style="animation-delay:.6s"/>
    <circle cx="450" cy="155" r="11" fill="rgba(245,166,35,.18)" stroke="#f5a623" stroke-width="1.8"/>
    <text x="450" y="159" font-family="DM Mono,monospace" font-size="9" fill="#f5a623" text-anchor="middle" font-weight="700" id="hubSiteLabel2">${l2}</text>
    <!-- Zone C -->
    <ellipse cx="295" cy="305" rx="85" ry="60" fill="url(#mmgC)"/>
    <rect x="222" y="256" width="148" height="100" rx="6" fill="rgba(59,130,246,.04)" stroke="rgba(59,130,246,.18)" stroke-width="1.5" stroke-dasharray="6 4"/>
    <rect x="236" y="268" width="46" height="34" rx="3" fill="rgba(59,130,246,.06)" stroke="rgba(59,130,246,.18)" stroke-width="1"/>
    <rect x="294" y="264" width="64" height="40" rx="3" fill="rgba(59,130,246,.07)" stroke="rgba(59,130,246,.22)" stroke-width="1"/>
    <circle class="hx-site-ping" cx="296" cy="305" r="16" fill="none" stroke="#3b82f6" stroke-width="1.8" opacity=".7" style="animation-delay:1.1s"/>
    <circle cx="296" cy="305" r="11" fill="rgba(59,130,246,.18)" stroke="#3b82f6" stroke-width="1.8"/>
    <text x="296" y="309" font-family="DM Mono,monospace" font-size="9" fill="#3b82f6" text-anchor="middle" font-weight="700" id="hubSiteLabel3">${l3}</text>
    <!-- Plant dots -->
    <circle cx="136" cy="122" r="5" fill="#3b82f6" opacity=".85"><animate attributeName="opacity" values=".85;.4;.85" dur="2.2s" repeatCount="indefinite"/></circle>
    <circle cx="178" cy="156" r="5" fill="#3b82f6" opacity=".8"><animate attributeName="opacity" values=".8;.35;.8" dur="2.7s" repeatCount="indefinite"/></circle>
    <circle cx="432" cy="138" r="5" fill="#3b82f6" opacity=".85"><animate attributeName="opacity" values=".85;.4;.85" dur="1.9s" repeatCount="indefinite"/></circle>
    <circle cx="470" cy="170" r="5" fill="#3b82f6" opacity=".7"><animate attributeName="opacity" values=".7;.3;.7" dur="3s" repeatCount="indefinite"/></circle>
    <circle cx="278" cy="290" r="5" fill="#3b82f6" opacity=".8"><animate attributeName="opacity" values=".8;.38;.8" dur="2.4s" repeatCount="indefinite"/></circle>
    <!-- Staff dots -->
    <circle cx="152" cy="143" r="3" fill="#a855f7" opacity=".9"/>
    <circle cx="163" cy="134" r="3" fill="#a855f7" opacity=".85"/>
    <circle cx="444" cy="158" r="3" fill="#a855f7" opacity=".9"/>
    <circle cx="458" cy="146" r="3" fill="#a855f7" opacity=".85"/>
    <circle cx="292" cy="308" r="3" fill="#a855f7" opacity=".9"/>
    <!-- Alert -->
    <g transform="translate(468,118)"><circle r="9" fill="rgba(239,68,68,.18)" stroke="#ef4444" stroke-width="1.5"/><text x="0" y="4" font-family="DM Mono,monospace" font-size="10" fill="#ef4444" text-anchor="middle" font-weight="900">!</text></g>
    <!-- Compass -->
    <g transform="translate(568,348)">
      <circle r="18" fill="rgba(4,8,16,.9)" stroke="rgba(245,166,35,.2)" stroke-width="1"/>
      <text x="0" y="-4" font-family="DM Mono,monospace" font-size="10" fill="#f5a623" text-anchor="middle" font-weight="700">N</text>
      <path d="M0 -2 L2.5 3.5 L0 1.5 L-2.5 3.5 Z" fill="#f5a623"/>
      <text x="0" y="14" font-family="DM Mono,monospace" font-size="7" fill="#2e4a61" text-anchor="middle">S</text>
    </g>
  </svg>`;
}

function renderHubFullMap(proj) {
  const wrap = document.getElementById('hubFullMapWrap');
  if (!wrap || !proj) return;
  const mapSites = getHubMapSites(proj);
  const l1=mapSites.label1, l2=mapSites.label2, l3=mapSites.label3;
  // Set toolbar labels
  const setEl=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  setEl('hubMapProjectLabel', proj.id);
  setEl('hubMapSiteName', mapSites.siteName+' – Live');
  setEl('hubMapStats', 'Staff: '+hubStaffData.length+' · Plant: '+hubEquipData.filter(e=>e.status==='active').length+'/'+hubEquipData.length);
  const ts=new Date(); setEl('hubMapTimestamp','LIVE · '+ts.getHours().toString().padStart(2,'0')+':'+ts.getMinutes().toString().padStart(2,'0')+':'+ts.getSeconds().toString().padStart(2,'0'));
  wrap.innerHTML = `<svg viewBox="0 0 1200 680" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
    <defs>
      <pattern id="fmg" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#090f1c" stroke-width="1"/></pattern>
      <radialGradient id="fmgA" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#22c55e" stop-opacity=".22"/><stop offset="100%" stop-color="#22c55e" stop-opacity="0"/></radialGradient>
      <radialGradient id="fmgB" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f5a623" stop-opacity=".22"/><stop offset="100%" stop-color="#f5a623" stop-opacity="0"/></radialGradient>
      <radialGradient id="fmgC" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#3b82f6" stop-opacity=".18"/><stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1200" height="680" fill="#040810"/>
    <rect width="1200" height="680" fill="url(#fmg)"/>
    <!-- Major road H -->
    <path d="M0 340 Q240 328 480 348 Q720 368 960 330 Q1080 314 1200 326" stroke="#0e1e32" stroke-width="22" fill="none"/>
    <path d="M0 340 Q240 328 480 348 Q720 368 960 330 Q1080 314 1200 326" stroke="#182e48" stroke-width="3" fill="none" stroke-dasharray="30 14"/>
    <!-- Major road V -->
    <path d="M600 0 Q588 200 608 340 Q622 460 600 680" stroke="#0e1e32" stroke-width="18" fill="none"/>
    <path d="M600 0 Q588 200 608 340 Q622 460 600 680" stroke="#182e48" stroke-width="2.5" fill="none" stroke-dasharray="30 14"/>
    <!-- Secondary roads -->
    <path d="M0 155 Q180 144 340 162 Q520 182 700 148 Q900 116 1100 138" stroke="#0b1828" stroke-width="12" fill="none"/>
    <path d="M0 155 Q180 144 340 162 Q520 182 700 148 Q900 116 1100 138" stroke="#12243a" stroke-width="1.5" fill="none" stroke-dasharray="22 10"/>
    <path d="M200 680 Q230 540 250 440 Q268 320 210 200 Q170 120 190 0" stroke="#0b1828" stroke-width="10" fill="none"/>
    <path d="M980 680 Q1000 550 990 440 Q980 320 1020 200 Q1050 110 1030 0" stroke="#0b1828" stroke-width="10" fill="none"/>
    <!-- Zone A -->
    <ellipse cx="260" cy="218" rx="130" ry="100" fill="url(#fmgA)"/>
    <rect x="148" y="132" width="224" height="172" rx="8" fill="rgba(34,197,94,.04)" stroke="rgba(34,197,94,.24)" stroke-width="1.5" stroke-dasharray="8 4"/>
    <text x="260" y="126" font-family="DM Mono,monospace" font-size="10" fill="rgba(34,197,94,.55)" text-anchor="middle" font-weight="700" letter-spacing="2">ZONE A — MAIN WORKS</text>
    <rect x="164" y="148" width="64" height="46" rx="3" fill="rgba(34,197,94,.07)" stroke="rgba(34,197,94,.22)" stroke-width="1"/>
    <rect x="242" y="142" width="80" height="56" rx="3" fill="rgba(34,197,94,.09)" stroke="rgba(34,197,94,.28)" stroke-width="1"/>
    <rect x="166" y="206" width="48" height="36" rx="2" fill="rgba(34,197,94,.06)" stroke="rgba(34,197,94,.18)" stroke-width="1"/>
    <rect x="228" y="208" width="90" height="34" rx="2" fill="rgba(34,197,94,.05)" stroke="rgba(34,197,94,.16)" stroke-width="1"/>
    <circle class="hx-site-ping" cx="262" cy="226" r="20" fill="none" stroke="#22c55e" stroke-width="2" opacity=".6"/>
    <circle cx="262" cy="226" r="15" fill="rgba(34,197,94,.2)" stroke="#22c55e" stroke-width="2"/>
    <text x="262" y="231" font-family="DM Mono,monospace" font-size="10" fill="#22c55e" text-anchor="middle" font-weight="700" id="fmapLabel1">${l1}</text>
    <!-- Zone B -->
    <ellipse cx="870" cy="256" rx="140" ry="108" fill="url(#fmgB)"/>
    <rect x="746" y="162" width="248" height="188" rx="8" fill="rgba(245,166,35,.04)" stroke="rgba(245,166,35,.22)" stroke-width="1.5" stroke-dasharray="8 4"/>
    <text x="870" y="156" font-family="DM Mono,monospace" font-size="10" fill="rgba(245,166,35,.55)" text-anchor="middle" font-weight="700" letter-spacing="2">ZONE B — CIVILS</text>
    <rect x="762" y="178" width="70" height="50" rx="3" fill="rgba(245,166,35,.06)" stroke="rgba(245,166,35,.22)" stroke-width="1"/>
    <rect x="848" y="172" width="88" height="58" rx="3" fill="rgba(245,166,35,.08)" stroke="rgba(245,166,35,.28)" stroke-width="1"/>
    <rect x="764" y="238" width="54" height="38" rx="2" fill="rgba(245,166,35,.05)" stroke="rgba(245,166,35,.17)" stroke-width="1"/>
    <rect x="832" y="242" width="96" height="34" rx="2" fill="rgba(245,166,35,.05)" stroke="rgba(245,166,35,.16)" stroke-width="1"/>
    <circle class="hx-site-ping" cx="872" cy="264" r="20" fill="none" stroke="#f5a623" stroke-width="2" opacity=".6" style="animation-delay:.6s"/>
    <circle cx="872" cy="264" r="15" fill="rgba(245,166,35,.2)" stroke="#f5a623" stroke-width="2"/>
    <text x="872" y="269" font-family="DM Mono,monospace" font-size="10" fill="#f5a623" text-anchor="middle" font-weight="700" id="fmapLabel2">${l2}</text>
    <!-- Zone C -->
    <ellipse cx="545" cy="510" rx="118" ry="90" fill="url(#fmgC)"/>
    <rect x="444" y="432" width="202" height="156" rx="8" fill="rgba(59,130,246,.04)" stroke="rgba(59,130,246,.2)" stroke-width="1.5" stroke-dasharray="8 4"/>
    <text x="545" y="426" font-family="DM Mono,monospace" font-size="10" fill="rgba(59,130,246,.55)" text-anchor="middle" font-weight="700" letter-spacing="2">ZONE C — SERVICES</text>
    <rect x="458" y="448" width="56" height="40" rx="3" fill="rgba(59,130,246,.06)" stroke="rgba(59,130,246,.2)" stroke-width="1"/>
    <rect x="526" y="444" width="72" height="46" rx="3" fill="rgba(59,130,246,.07)" stroke="rgba(59,130,246,.24)" stroke-width="1"/>
    <rect x="460" y="500" width="44" height="32" rx="2" fill="rgba(59,130,246,.05)" stroke="rgba(59,130,246,.16)" stroke-width="1"/>
    <circle class="hx-site-ping" cx="548" cy="516" r="20" fill="none" stroke="#3b82f6" stroke-width="2" opacity=".6" style="animation-delay:1.1s"/>
    <circle cx="548" cy="516" r="15" fill="rgba(59,130,246,.2)" stroke="#3b82f6" stroke-width="2"/>
    <text x="548" y="521" font-family="DM Mono,monospace" font-size="10" fill="#3b82f6" text-anchor="middle" font-weight="700" id="fmapLabel3">${l3}</text>
    <!-- Plant (animated) -->
    <circle cx="238" cy="200" r="7" fill="#3b82f6" opacity=".9"><animate attributeName="opacity" values=".9;.45;.9" dur="2.2s" repeatCount="indefinite"/></circle>
    <circle cx="290" cy="242" r="7" fill="#3b82f6" opacity=".8"><animate attributeName="opacity" values=".8;.38;.8" dur="2.7s" repeatCount="indefinite"/></circle>
    <circle cx="848" cy="240" r="7" fill="#3b82f6" opacity=".85"><animate attributeName="opacity" values=".85;.4;.85" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="898" cy="278" r="7" fill="#3b82f6" opacity=".75"><animate attributeName="opacity" values=".75;.32;.75" dur="3.1s" repeatCount="indefinite"/></circle>
    <circle cx="524" cy="496" r="7" fill="#3b82f6" opacity=".82"><animate attributeName="opacity" values=".82;.38;.82" dur="2.5s" repeatCount="indefinite"/></circle>
    <!-- Staff -->
    <circle cx="256" cy="230" r="4" fill="#a855f7" opacity=".9"/><circle cx="270" cy="218" r="4" fill="#a855f7" opacity=".85"/>
    <circle cx="864" cy="268" r="4" fill="#a855f7" opacity=".9"/><circle cx="880" cy="254" r="4" fill="#a855f7" opacity=".85"/>
    <circle cx="542" cy="520" r="4" fill="#a855f7" opacity=".88"/>
    <!-- Alert marker -->
    <g transform="translate(900,226)"><circle r="12" fill="rgba(239,68,68,.18)" stroke="#ef4444" stroke-width="1.8"/><text x="0" y="4" font-family="DM Mono,monospace" font-size="12" fill="#ef4444" text-anchor="middle" font-weight="900">!</text></g>
    <!-- Compass -->
    <g transform="translate(1152,638)">
      <circle r="28" fill="rgba(4,8,16,.92)" stroke="rgba(245,166,35,.22)" stroke-width="1.2"/>
      <text x="0" y="-7" font-family="DM Mono,monospace" font-size="13" fill="#f5a623" text-anchor="middle" font-weight="700">N</text>
      <path d="M0 -3 L3.5 5 L0 3 L-3.5 5 Z" fill="#f5a623"/>
      <text x="0" y="18" font-family="DM Mono,monospace" font-size="9" fill="#2e4a61" text-anchor="middle">S</text>
      <text x="-18" y="5" font-family="DM Mono,monospace" font-size="9" fill="#2e4a61" text-anchor="middle">W</text>
      <text x="18" y="5" font-family="DM Mono,monospace" font-size="9" fill="#2e4a61" text-anchor="middle">E</text>
    </g>
    <!-- Scale bar -->
    <g transform="translate(40,645)">
      <line x1="0" y1="0" x2="120" y2="0" stroke="#1e3a50" stroke-width="2"/>
      <line x1="0" y1="-5" x2="0" y2="5" stroke="#1e3a50" stroke-width="2"/>
      <line x1="120" y1="-5" x2="120" y2="5" stroke="#1e3a50" stroke-width="2"/>
      <line x1="60" y1="-3" x2="60" y2="3" stroke="#1e3a50" stroke-width="1.5"/>
      <text x="60" y="-9" font-family="DM Mono,monospace" font-size="9" fill="#2e4a61" text-anchor="middle">100m</text>
    </g>
    <!-- Layer controls overlay (static) -->
  </svg>
  <div class="hx-map-overlay-card" style="top:16px;right:16px">
    <div style="font-size:8px;font-weight:700;letter-spacing:2px;color:#2e4a61;margin-bottom:8px">LAYERS</div>
    <div style="display:flex;flex-direction:column;gap:6px">
      <label style="display:flex;align-items:center;gap:7px;cursor:pointer;font-size:10px;color:#4a6a84"><input type="checkbox" checked style="accent-color:#f5a623"> Site Zones</label>
      <label style="display:flex;align-items:center;gap:7px;cursor:pointer;font-size:10px;color:#4a6a84"><input type="checkbox" checked style="accent-color:#3b82f6"> Plant</label>
      <label style="display:flex;align-items:center;gap:7px;cursor:pointer;font-size:10px;color:#4a6a84"><input type="checkbox" checked style="accent-color:#a855f7"> Personnel</label>
      <label style="display:flex;align-items:center;gap:7px;cursor:pointer;font-size:10px;color:#4a6a84"><input type="checkbox" style="accent-color:#ef4444"> Alerts</label>
    </div>
  </div>
  <div class="hx-map-overlay-card" style="bottom:12px;left:16px">
    <div style="font-size:9px;font-family:'DM Mono',monospace;color:#f5a623;letter-spacing:1.5px;margin-bottom:3px">PROJECT: <span id="hubMapProjectLabel">${proj.id}</span></div>
    <div style="font-size:13px;font-weight:700;color:#dde8f4;margin-bottom:2px" id="hubMapSiteName">${mapSites.siteName} – Live</div>
    <div style="font-size:10px;font-family:'DM Mono',monospace;color:#f5a623;margin-bottom:4px" id="hubMapCoords">${mapSites.coords}</div>
    <div style="font-size:10px;color:#4a6a84" id="hubMapStats"></div>
  </div>`;
}

function renderHubFinancials(proj) {
  if (!proj) return;
  const projId = proj.id;
  const budget = proj.budget || 0;
  const actual = proj.actualCost || 0;

  // Gather project invoices
  const projInvs = invoices.filter(i => i.projectId === projId || i.project === projId);
  const projPOs  = purchaseOrders.filter(p => p.projectId === projId || p.project === projId);

  const invoiced   = projInvs.reduce((s,i) => s + toNum(i.amount,0), 0);
  const paid       = projInvs.reduce((s,i) => s + toNum(i.paid||i.amountPaid,0), 0);
  const outstanding = invoiced - paid;
  const poTotal    = projPOs.reduce((s,p) => s + toNum(p.amount||p.total,0), 0);
  const margin     = invoiced > 0 ? Math.round(((invoiced - actual) / invoiced) * 100) : 0;
  const invPct     = budget > 0 ? Math.round((invoiced / budget) * 100) : 0;
  const costPct    = budget > 0 ? Math.round((actual  / budget) * 100) : 0;

  const setEl = (id,v) => { const e=document.getElementById(id); if(e) e.textContent=v; };
  setEl('hfin-contract', fmt(budget));
  setEl('hfin-contract-meta', 'Approved budget');
  setEl('hfin-invoiced', fmt(invoiced));
  setEl('hfin-invoiced-pct', invPct + '% of contract');
  setEl('hfin-paid', fmt(paid));
  setEl('hfin-outstanding', fmt(outstanding) + ' outstanding');
  setEl('hfin-cost', fmt(actual));
  setEl('hfin-cost-pct', costPct + '% of budget');

  const margEl = document.getElementById('hfin-margin');
  if (margEl) {
    margEl.textContent = margin + '%';
    margEl.style.color = margin >= 30 ? '#22c55e' : margin >= 15 ? '#f5a623' : '#ef4444';
  }
  setEl('hfin-po', fmt(poTotal));
  setEl('hfin-po-meta', projPOs.length + ' supplier order' + (projPOs.length !== 1 ? 's' : ''));

  // Invoice table
  const invTb = document.getElementById('hfin-inv-tbody');
  const invCount = document.getElementById('hfin-inv-count');
  if (invCount) invCount.textContent = projInvs.length + ' invoice' + (projInvs.length !== 1 ? 's' : '');
  if (invTb) {
    if (!projInvs.length) {
      invTb.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--htm);font-size:11px">No invoices linked to this project</td></tr>';
    } else {
      invTb.innerHTML = projInvs.map(i => {
        const amt = toNum(i.amount,0);
        const ipaid = toNum(i.paid||i.amountPaid,0);
        const pct = amt > 0 ? Math.round((ipaid/amt)*100) : 0;
        return `<tr>
          <td style="font-family:var(--font-mono);font-size:10px;color:var(--ha)">${i.id}</td>
          <td style="font-size:11px">${i.description||i.title||'Invoice'}</td>
          <td style="font-family:var(--font-mono);text-align:right">${fmt(amt)}</td>
          <td style="font-family:var(--font-mono);text-align:right;color:#22c55e">${fmt(ipaid)}</td>
          <td><span class="status-badge ${bc(i.status)}">${i.status}</span></td>
        </tr>`;
      }).join('');
    }
  }

  // PO table
  const poTb = document.getElementById('hfin-po-tbody');
  const poCount = document.getElementById('hfin-po-count');
  if (poCount) poCount.textContent = projPOs.length + ' PO' + (projPOs.length !== 1 ? 's' : '');
  if (poTb) {
    if (!projPOs.length) {
      poTb.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--htm);font-size:11px">No purchase orders linked to this project</td></tr>';
    } else {
      poTb.innerHTML = projPOs.map(p => {
        const amt = toNum(p.amount||p.total,0);
        const ppaid = toNum(p.paid||p.amountPaid,0);
        return `<tr>
          <td style="font-family:var(--font-mono);font-size:10px;color:var(--ha)">${p.id}</td>
          <td style="font-size:11px">${p.supplier||p.supplierName||'—'}</td>
          <td style="font-family:var(--font-mono);text-align:right">${fmt(amt)}</td>
          <td style="font-family:var(--font-mono);text-align:right;color:#22c55e">${fmt(ppaid)}</td>
          <td><span class="status-badge ${bc(p.status)}">${p.status}</span></td>
        </tr>`;
      }).join('');
    }
  }

  // Cash flow summary bar chart (SVG)
  const cf = document.getElementById('hfin-cashflow');
  if (cf) {
    const bars = [
      { label:'Budget',    value: budget,      color: '#3b82f6' },
      { label:'Cost',      value: actual,       color: budget>0&&actual/budget>.9?'#ef4444':'#f59e0b' },
      { label:'Invoiced',  value: invoiced,     color: '#f5a623' },
      { label:'Collected', value: paid,         color: '#22c55e' },
      { label:'PO Committed', value: poTotal,   color: '#a855f7' },
    ];
    const maxVal = Math.max(...bars.map(b=>b.value), 1);
    cf.innerHTML = bars.map(b => {
      const pct = Math.round((b.value/maxVal)*100);
      return `<div style="display:flex;flex-direction:column;align-items:center;gap:6px;min-width:80px;flex:1">
        <div style="font-size:16px;font-weight:700;font-family:var(--font-mono);color:${b.color}">${fmtShort(b.value)}</div>
        <div style="width:100%;height:80px;background:rgba(255,255,255,.05);border-radius:4px;display:flex;align-items:flex-end;overflow:hidden">
          <div style="width:100%;height:${pct}%;background:${b.color};opacity:.8;border-radius:4px 4px 0 0;transition:height .4s ease"></div>
        </div>
        <div style="font-size:9px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:var(--htm);text-align:center">${b.label}</div>
      </div>`;
    }).join('');
  }
}


function filterHubStaff(q) {
  const grid = document.getElementById('hubStaffGrid');
  if (!grid || !grid._allData) return;
  const qL = q.toLowerCase();
  const filtered = grid._allData.filter(s =>
    !qL || s.name.toLowerCase().includes(qL) || s.role.toLowerCase().includes(qL)
  );
  _renderStaffCards(grid, filtered);
}
function hubFilterPill(btn, type) {
  document.querySelectorAll('#hxv-staff .hx-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('hubStaffGrid');
  if (!grid || !grid._allData) return;
  let filtered = grid._allData;
  if (type === 'active') filtered = filtered.filter(s => s.status === 'active');
  else if (type === 'engineer') filtered = filtered.filter(s => s.type === 'engineer');
  else if (type === 'operator') filtered = filtered.filter(s => s.type === 'operator');
  _renderStaffCards(grid, filtered);
}
function closeConstructionHub() {
  if (hubClockTimer) { clearInterval(hubClockTimer); hubClockTimer = null; }
  document.body.classList.remove('hub-mode');
  // Switch back to projects view
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const projItem = document.querySelector('.nav-item[data-view="projects"]');
  if (projItem) projItem.click();
}

//  Project data generators ––––––––––––

function hubRand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function hubPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function getHubStaffPool(project) {
  const pm = project.manager || 'Site Manager';
  const pmInitials = pm.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  const site = project.site || 'Main Site';
  const isLoggedIn = currentUser && currentUser.name;
  const luName = isLoggedIn ? currentUser.name : 'James Donaldson';
  const luInitials = luName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);

  const isMining = /mine|shaft|mining|ventilation|reagent/i.test(project.name + project.site);
  const isStructural = /struct|rehab|civil|concrete|rebar/i.test(project.name);

  const miningRoles = [
    { name: pm, role: 'Project Manager', site: site, status: 'active', statusLabel: 'On Site', initials: pmInitials, color: '#f5a623', hours: (5 + Math.random()*3).toFixed(1)+'h', certs: ['ECSA','MHSA','GCC'], certStates: ['valid','valid','valid'], type: 'management', isUser: false },
    { name: 'Thabo Sithole', role: 'Mine Engineer', site: site, status: 'active', statusLabel: 'On Site', initials: 'TS', color: '#3b82f6', hours: (4+Math.random()*4).toFixed(1)+'h', certs: ['ECSA','MHSA'], certStates: ['valid','valid'], type: 'engineer' },
    { name: 'Anele Dlamini', role: 'Ventilation Officer', site: site, status: 'active', statusLabel: 'On Site', initials: 'AD', color: '#22c55e', hours: (5+Math.random()*3).toFixed(1)+'h', certs: ['GCC','MHSA','FA'], certStates: ['valid','valid','expiring'], type: 'engineer' },
    { name: 'Pieter van Niekerk', role: 'Rock Engineering Tech', site: site, status: 'warn', statusLabel: 'On Break', initials: 'PV', color: '#f59e0b', hours: (3+Math.random()*3).toFixed(1)+'h', certs: ['MHSA','CSCS'], certStates: ['valid','expiring'], type: 'operator' },
    { name: 'Nombuso Khoza', role: 'H&S Officer', site: 'All Sites', status: 'active', statusLabel: 'Touring', initials: 'NK', color: '#06b6d4', hours: (4+Math.random()*4).toFixed(1)+'h', certs: ['NEBOSH','IOSH'], certStates: ['valid','valid'], type: 'management' },
    { name: 'Grant Swanepoel', role: 'Shaft Sinker Foreman', site: site, status: 'active', statusLabel: 'On Site', initials: 'GS', color: '#10b981', hours: (6+Math.random()*2).toFixed(1)+'h', certs: ['MHSA','CPCS'], certStates: ['valid','valid'], type: 'operator' },
    { name: 'Karabo Nkosi', role: 'Mechanical Technician', site: site, status: 'active', statusLabel: 'On Site', initials: 'KN', color: '#8b5cf6', hours: (5+Math.random()*3).toFixed(1)+'h', certs: ['EWSETA','MHSA'], certStates: ['valid','valid'], type: 'operator' },
    { name: 'Bronwyn Steyn', role: 'QS / Commercial', site: 'Remote', status: 'warn', statusLabel: 'Remote', initials: 'BS', color: '#ec4899', hours: (2+Math.random()*3).toFixed(1)+'h', certs: ['MRICS','CIOB'], certStates: ['valid','expiring'], type: 'management' },

    { name: 'Solomon Moagi', role: 'Electrician (MV)', site: site, status: 'active', statusLabel: 'On Site', initials: 'SM', color: '#6366f1', hours: (4+Math.random()*4).toFixed(1)+'h', certs: ['EWSETA','MHSA'], certStates: ['valid','valid'], type: 'operator' },
    { name: luName, role: currentUser?.role||'Admin', site: 'All Sites', status: 'active', statusLabel: 'Logged In', initials: luInitials, color: '#f5a623', hours: (5+Math.random()*3).toFixed(1)+'h', certs: ['ECSA','PrEng'], certStates: ['valid','valid'], type: 'management', isUser: true },
  ];

  const structuralRoles = [
    { name: pm, role: 'Project Manager', site: site, status: 'active', statusLabel: 'On Site', initials: pmInitials, color: '#f5a623', hours: (5+Math.random()*3).toFixed(1)+'h', certs: ['ECSA','CIOB'], certStates: ['valid','valid'], type: 'management' },
    { name: 'Danie Pretorius', role: 'Structural Engineer', site: site, status: 'active', statusLabel: 'On Site', initials: 'DP', color: '#3b82f6', hours: (4+Math.random()*4).toFixed(1)+'h', certs: ['ECSA','PrEng'], certStates: ['valid','valid'], type: 'engineer' },
    { name: 'Mpho Selepe', role: 'Site Supervisor', site: site, status: 'active', statusLabel: 'On Site', initials: 'MS', color: '#22c55e', hours: (6+Math.random()*2).toFixed(1)+'h', certs: ['CIOB','CSCS'], certStates: ['valid','valid'], type: 'management' },
    { name: 'Riaan Botha', role: 'Civil Foreman', site: site, status: 'warn', statusLabel: 'On Break', initials: 'RB', color: '#f59e0b', hours: (3+Math.random()*3).toFixed(1)+'h', certs: ['CSCS'], certStates: ['expiring'], type: 'operator' },
    { name: 'Zanele Mthembu', role: 'QA Inspector', site: site, status: 'active', statusLabel: 'On Site', initials: 'ZM', color: '#06b6d4', hours: (4+Math.random()*4).toFixed(1)+'h', certs: ['IRCA','ISO9001'], certStates: ['valid','valid'], type: 'management' },
    { name: 'Arno Steenkamp', role: 'Rebar Fixer', site: site, status: 'active', statusLabel: 'On Site', initials: 'AS', color: '#10b981', hours: (6+Math.random()*2).toFixed(1)+'h', certs: ['CSCS'], certStates: ['valid'], type: 'operator' },
    { name: luName, role: currentUser?.role||'Admin', site: 'All Sites', status: 'active', statusLabel: 'Logged In', initials: luInitials, color: '#f5a623', hours: (5+Math.random()*3).toFixed(1)+'h', certs: ['ECSA','PrEng'], certStates: ['valid','valid'], type: 'management', isUser: true },
  ];

  const defaultRoles = [
    { name: pm, role: 'Project Manager', site: site, status: 'active', statusLabel: 'On Site', initials: pmInitials, color: '#f5a623', hours: (5+Math.random()*3).toFixed(1)+'h', certs: ['ECSA','PMI'], certStates: ['valid','valid'], type: 'management' },
    { name: 'Fatima Osman', role: 'Lead Engineer', site: site, status: 'active', statusLabel: 'On Site', initials: 'FO', color: '#3b82f6', hours: (5+Math.random()*3).toFixed(1)+'h', certs: ['ECSA'], certStates: ['valid'], type: 'engineer' },
    { name: 'Lebo Motaung', role: 'Site Foreman', site: site, status: 'warn', statusLabel: 'On Break', initials: 'LM', color: '#f59e0b', hours: (3+Math.random()*3).toFixed(1)+'h', certs: ['CSCS'], certStates: ['expiring'], type: 'operator' },
    { name: luName, role: currentUser?.role||'Admin', site: 'All Sites', status: 'active', statusLabel: 'Logged In', initials: luInitials, color: '#f5a623', hours: (5+Math.random()*3).toFixed(1)+'h', certs: ['ECSA'], certStates: ['valid'], type: 'management', isUser: true },
  ];

  return isMining ? miningRoles : isStructural ? structuralRoles : defaultRoles;
}

function renderHubStaff(data) {
  const grid = document.getElementById('hubStaffGrid');
  if (!grid) return;
  const staffCount = document.getElementById('kpi-staff');
  if (staffCount) staffCount.textContent = data.length;
  const _hubStaffAll = data;
  grid._allData = data;
  _renderStaffCards(grid, data);
}
function _renderStaffCards(grid, data) {
  if (!data.length) { grid.innerHTML = '<div style="padding:40px;text-align:center;color:#2e4a61;font-size:12px">No staff match the filter.</div>'; return; }
  grid.innerHTML = data.map(s => {
    const statusCol = s.status === 'active' ? '#22c55e' : s.status === 'warn' ? '#f59e0b' : '#ef4444';
    const certsHtml = (s.certs||[]).map((c,i) => {
      const st = (s.certStates||[])[i]||'valid';
      const col = st==='valid'?'#22c55e':st==='expiring'?'#f59e0b':'#ef4444';
      return `<span class="hx-cert" style="border-color:${col};color:${col}">${c}</span>`;
    }).join(' ');
    const youBadge = s.isUser ? `<span style="font-size:8px;background:#f5a623;color:#fff;padding:1px 5px;border-radius:3px;margin-left:5px;font-weight:700">YOU</span>` : '';
    return `<div class="hx-staff-card${s.isUser?' is-you':''}">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
        <div class="hx-staff-avatar" style="background:${s.color}1a;border:2px solid ${s.color};color:${s.color}">${s.initials}</div>
        <div style="flex:1;min-width:0">
          <div class="hx-staff-name">${s.name}${youBadge}</div>
          <div class="hx-staff-role">${s.role}</div>
        </div>
        <div class="hx-staff-status" style="background:${statusCol}" title="${s.statusLabel}"></div>
      </div>
      <div style="font-size:10px;color:#2e4a61;margin-bottom:8px;font-family:'DM Mono',monospace">${s.site} · ${s.statusLabel} · ${s.hours}</div>
      <div style="display:flex;gap:4px;flex-wrap:wrap">${certsHtml}</div>
    </div>`;
  }).join('');
}

function getHubEquipPool(project) {
  const isMining = /mine|shaft|mining|ventilation|reagent/i.test(project.name + project.site);
  const base = isMining ? [
    { id: 'E01', name: 'Sandvik LH514 LHD', type: 'Load-Haul-Dump', status: 'active', utilisation: 87, lastService: '2026-03-15', nextService: '2026-06-15', operator: 'Grant Swanepoel', fuel: 78 },
    { id: 'E02', name: 'Atlas Copco Simba E7', type: 'Production Drill Rig', status: 'warn', utilisation: 62, lastService: '2026-02-28', nextService: '2026-05-01', operator: 'Karabo Nkosi', fuel: 45 },
    { id: 'E03', name: 'Epiroc Boomer M2C', type: 'Face Drill Rig', status: 'active', utilisation: 91, lastService: '2026-04-01', nextService: '2026-07-01', operator: 'Thabo Sithole', fuel: 82 },
    { id: 'E04', name: 'Normet Spraymec 8100', type: 'Shotcrete Sprayer', status: 'alert', utilisation: 0, lastService: '2026-01-10', nextService: '2026-04-10', operator: 'Unassigned', fuel: 20 },
    { id: 'E05', name: 'Hencon T22 Tipper', type: 'Underground Truck', status: 'active', utilisation: 79, lastService: '2026-03-20', nextService: '2026-06-20', operator: 'Solomon Moagi', fuel: 65 },
  ] : [
    { id: 'E01', name: 'Liebherr LTM 1100 Crane', type: 'Mobile Crane', status: 'active', utilisation: 74, lastService: '2026-03-10', nextService: '2026-06-10', operator: 'Mpho Selepe', fuel: 70 },
    { id: 'E02', name: 'CAT 336 Excavator', type: 'Hydraulic Excavator', status: 'active', utilisation: 88, lastService: '2026-04-02', nextService: '2026-07-02', operator: 'Arno Steenkamp', fuel: 55 },
    { id: 'E03', name: 'Schwing S52 Pump', type: 'Concrete Pump', status: 'warn', utilisation: 50, lastService: '2026-02-15', nextService: '2026-05-15', operator: 'Riaan Botha', fuel: 40 },
    { id: 'E04', name: 'Manitowoc 222 Tower Crane', type: 'Tower Crane', status: 'active', utilisation: 95, lastService: '2026-03-25', nextService: '2026-06-25', operator: 'Danie Pretorius', fuel: 90 },
  ];
  return base;
}

function renderHubEquipment() {
  const list = document.getElementById('hubEquipmentList');
  if (!list) return;
  const data = hubEquipData;
  list.innerHTML = data.map((e,i) => {
    const col = e.status==='active'?'#22c55e':e.status==='warn'?'#f59e0b':'#ef4444';
    const slbl = e.status==='active'?'Operational':e.status==='warn'?'Maintenance Due':'Suspended';
    const utilPct = e.utilisation||0;
    return `<div class="hx-equip-row${i===hubSelectedEquip?' active':''}" onclick="hubSelectEquip(${i})">
      <div style="display:flex;align-items:center;gap:8px">
        <div style="width:8px;height:8px;border-radius:50%;background:${col};flex-shrink:0"></div>
        <div style="flex:1;min-width:0">
          <div class="hx-equip-name">${e.name}</div>
          <div class="hx-equip-type">${e.type}</div>
        </div>
        <span style="font-size:9px;font-family:'DM Mono',monospace;color:${col}">${slbl}</span>
      </div>
      <div class="hx-equip-bar"><div class="hx-equip-bar-fill" style="width:${utilPct}%;background:${col}"></div></div>
    </div>`;
  }).join('');
  hubSelectEquip(hubSelectedEquip);
}

function hubSelectEquip(idx) {
  hubSelectedEquip = idx;
  const detail = document.getElementById('hubEquipDetail');
  const list = document.getElementById('hubEquipmentList');
  if (!detail || !hubEquipData.length) return;
  // Update active state in list
  list.querySelectorAll('.hx-equip-row').forEach((r,i) => r.classList.toggle('active', i===idx));
  const e = hubEquipData[idx];
  if (!e) return;
  const col = e.status==='active'?'#22c55e':e.status==='warn'?'#f59e0b':'#ef4444';
  const slbl = e.status==='active'?'OPERATIONAL':e.status==='warn'?'MAINTENANCE DUE':'SUSPENDED';
  const utilPct = e.utilisation||0;
  detail.innerHTML = `
    <div style="margin-bottom:16px">
      <div style="font-size:9px;font-family:'DM Mono',monospace;color:#f5a623;letter-spacing:2px;margin-bottom:4px">${e.id}</div>
      <div style="font-size:16px;font-weight:700;color:#e8f2ff;margin-bottom:2px">${e.name}</div>
      <div style="font-size:11px;color:#4a6a84;margin-bottom:10px">${e.type}</div>
      <span style="font-size:10px;font-weight:700;font-family:'DM Mono',monospace;padding:4px 10px;border-radius:4px;background:${e.status==='active'?'rgba(34,197,94,.1)':e.status==='warn'?'rgba(245,166,35,.1)':'rgba(239,68,68,.1)'};border:1px solid ${col};color:${col}">${slbl}</span>
    </div>
    <div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <span style="font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#2e4a61">Utilisation</span>
        <span style="font-size:13px;font-weight:700;font-family:'DM Mono',monospace;color:${col}">${utilPct}%</span>
      </div>
      <div style="height:6px;background:rgba(255,255,255,.05);border-radius:3px;overflow:hidden">
        <div style="height:100%;width:${utilPct}%;background:${col};border-radius:3px;transition:width .6s ease"></div>
      </div>
    </div>
    <div>
      ${[
        ['Asset ID', e.id],
        ['Type', e.type],
        ['Operator', e.operator||'—'],
        ['Fuel Level', (e.fuel||0)+'%'],
        ['Utilisation', (e.utilisation||0)+'%'],
        ['Last Service', e.lastService||'—'],
        ['Next Service', e.nextService||'—'],
        ['Status', slbl],
      ].map(([l,v])=>`<div class="hx-detail-row"><div class="hx-detail-lbl">${l}</div><div class="hx-detail-val">${v}</div></div>`).join('')}
    </div>`;
}

function getHubMapSites(project) {
  const isMining = /mine|shaft|mining|ventilation|reagent/i.test(project.name + project.site);
  if (isMining) return { label1: 'Shaft Head', label2: 'Vent Fan', label3: 'Portal', siteName: project.site || 'Main Site', coords: '-27.9589° S 24.7161° E' };
  return { label1: 'Crane Bay', label2: 'Concrete Batch', label3: 'Steel Yard', siteName: project.site || 'Site Office', coords: '-25.7479° S 28.2293° E' };
}

function getHubActivity(project) {
  const pm = project.manager || 'Site Manager';
  return [
    { title: 'Daily progress report submitted', meta: pm + ' · ' + new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}), color: '#22c55e', time: 'Now' },
    { title: 'Safety induction – 4 new workers', meta: 'H&S Officer · 08:30', color: '#3b82f6', time: '2h ago' },
    { title: 'Concrete pour completed – Grid B4', meta: 'Foreman · 07:15', color: '#f5a623', time: '4h ago' },
    { title: 'Equipment maintenance alert raised', meta: 'Plant Controller · Yesterday', color: '#ef4444', time: 'Yest.' },
    { title: 'RFI #' + hubRand(12,20) + ' submitted to engineer', meta: 'Site Supervisor · Yesterday', color: '#a855f7', time: 'Yest.' },
    { title: 'Material delivery confirmed – rebar', meta: 'Procurement · 2 days ago', color: '#14b8a6', time: '2d' },
  ];
}

function getHubGanttTasks(project) {
  const pct = project.budget > 0 ? Math.min(95, Math.round((project.actualCost / project.budget) * 100)) : 20;
  return [
    { label: 'Mobilisation', start: 0, width: 15, pct: '100%', color: '#22c55e' },
    { label: 'Site Establishment', start: 5, width: 20, pct: '100%', color: '#22c55e' },
    { label: 'Bulk Earthworks', start: 10, width: 30, pct: pct + '%', color: pct < 50 ? '#f5a623' : '#22c55e' },
    { label: 'Structural Works', start: 25, width: 35, pct: Math.max(0, pct - 20) + '%', color: '#3b82f6' },
    { label: 'M&E Installation', start: 45, width: 30, pct: Math.max(0, pct - 45) + '%', color: '#a855f7' },
    { label: 'Commissioning', start: 70, width: 20, pct: '0%', color: '#6b7280' },
    { label: 'Close-out & Handover', start: 85, width: 15, pct: '0%', color: '#6b7280' },
  ];
}

// ════════════════════════════════════════════════════════════════
//  PAGINATION + FILTER + SORT ENGINE
// ════════════════════════════════════════════════════════════════
const PAGE_SIZE = 25;
const _tbl = {
  cust: {q:'',page:1,sort:'companyName',dir:1,seg:''},
  sup:  {q:'',page:1,sort:'companyName',dir:1,cat:''},
  inv:  {q:'',page:1,sort:'issued',dir:-1,status:'',from:'',to:''},
  po:   {q:'',page:1,sort:'ordered',dir:-1,status:'',from:'',to:''},
  prod: {q:'',page:1,sort:'name',dir:1,cat:''},
  qt:   {q:'',page:1,sort:'created',dir:-1,status:''},
  proj: {q:'',page:1,sort:'name',dir:1,status:''},
  txn:  {q:'',page:1,sort:'date',dir:-1,type:'',from:'',to:''},
  stmt: {page:1},
};

function filterTable(tbodyId, searchId) {
  const keyMap = {
    'cust-tbody':'cust','sup-tbody':'sup','inv-tbody':'inv','po-tbody':'po',
    'prod-tbody':'prod','qt-tbody':'qt','proj-tbody':'proj','txn-tbody':'txn','stmt-tbody':'stmt'
  };
  const key = keyMap[tbodyId];
  if (!key || !_tbl[key]) return;
  const q = (document.getElementById(searchId)?.value || '').trim().toLowerCase();
  _tbl[key].q = q;
  _tbl[key].page = 1;
  ({cust:renderCustomers,sup:renderSuppliers,inv:renderInvoices,po:renderPurchaseOrders,
    prod:renderProducts,qt:renderQuotes,proj:renderProjects,txn:renderTransactions,stmt:renderStatements})[key]?.();
}

function _goPage(key, page) {
  if (_tbl[key]) _tbl[key].page = page;
  ({cust:renderCustomers,sup:renderSuppliers,inv:renderInvoices,po:renderPurchaseOrders,
    prod:renderProducts,qt:renderQuotes,proj:renderProjects,txn:renderTransactions,stmt:renderStatements})[key]?.();
  document.getElementById('pg-'+key)?.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function _sortTable(key, col) {
  if (!_tbl[key]) return;
  _tbl[key].dir = (_tbl[key].sort===col) ? _tbl[key].dir*-1 : 1;
  _tbl[key].sort = col;
  _tbl[key].page = 1;
  ({cust:renderCustomers,sup:renderSuppliers,inv:renderInvoices,po:renderPurchaseOrders,
    prod:renderProducts,qt:renderQuotes,proj:renderProjects,txn:renderTransactions})[key]?.();
}

function _pagerHtml(key, total, current) {
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  if (pages <= 1 && total <= PAGE_SIZE) return '';
  const from = (current-1)*PAGE_SIZE + 1;
  const to = Math.min(current*PAGE_SIZE, total);
  const start = Math.max(1, current-2), end = Math.min(pages, start+4);
  let btns = '';
  if (current > 1) btns += `<button class="pg-btn" onclick="_goPage('${key}',${current-1})">&#8249;</button>`;
  for (let p=start; p<=end; p++) btns += `<button class="pg-btn${p===current?' pg-btn-active':''}" onclick="_goPage('${key}',${p})">${p}</button>`;
  if (current < pages) btns += `<button class="pg-btn" onclick="_goPage('${key}',${current+1})">&#8250;</button>`;
  return `<div class="pager"><span class="pager-info">${from}–${to} of ${total}</span>${btns}</div>`;
}

function _setPager(key, total, page) {
  const el = document.getElementById('pg-'+key);
  if (el) el.innerHTML = _pagerHtml(key, total, page);
}

function _sortRows(rows, sort, dir) {
  if (!sort) return rows;
  return [...rows].sort((a,b) => {
    const av = a[sort]??'', bv = b[sort]??'';
    if (typeof av === 'number' && typeof bv === 'number') return (av-bv)*dir;
    return String(av).localeCompare(String(bv),undefined,{numeric:true,sensitivity:'base'})*dir;
  });
}

function _updateSortHeaders(tableSelector, key) {
  document.querySelectorAll(`${tableSelector} th[data-sortable]`).forEach(th => {
    const col = th.dataset.sortable;
    th.classList.toggle('sort-asc',  _tbl[key]?.sort===col && _tbl[key]?.dir===1);
    th.classList.toggle('sort-desc', _tbl[key]?.sort===col && _tbl[key]?.dir===-1);
    th.onclick = () => _sortTable(key, col);
  });
}

// Wire sortable headers dynamically given a tbody id and a columns array:
// cols = [{label, field}] — matches positionally to <th> elements in parent thead
function _wireSortHeaders(tbodyId, key, cols) {
  const tbody = document.getElementById(tbodyId); if (!tbody) return;
  const table = tbody.closest('table'); if (!table) return;
  const ths = table.querySelectorAll('thead th');
  const st = _tbl[key]||{};
  cols.forEach((col, i) => {
    const th = ths[i]; if (!th || !col.field) return;
    th.style.cursor = 'pointer';
    th.style.userSelect = 'none';
    const arrow = st.sort===col.field ? (st.dir===1 ? ' ↑' : ' ↓') : ' ⇅';
    const arrowSpan = `<span style="opacity:${st.sort===col.field?1:.35};color:${st.sort===col.field?'var(--blue)':'inherit'};font-size:10px">${arrow}</span>`;
    th.innerHTML = col.label + arrowSpan;
    th.onclick = () => _sortTable(key, col.field);
  });
}

// ─── Paginated renderCustomers ───────────────────────────────
function renderCustomers() {
  const tbody = document.getElementById('cust-tbody'); if (!tbody) return;
  const st = _tbl.cust;
  const q = st.q.toLowerCase();
  const seg = (document.getElementById('cust-seg-filter')?.value||'').toLowerCase();
  const cstatus = document.getElementById('cust-status-filter')?.value||'';
  let rows = customers.filter(c =>
    (!q || (c.companyName+c.customerCode+c.contact+c.industry).toLowerCase().includes(q)) &&
    (!seg || c.industry?.toLowerCase()===seg) &&
    (!cstatus || c.status===cstatus)
  );
  rows = _sortRows(rows, st.sort, st.dir);
  const total = rows.length;
  const slice = rows.slice((st.page-1)*PAGE_SIZE, st.page*PAGE_SIZE);
  if (!slice.length) {
    tbody.innerHTML = '<tr><td colspan="6" class="empty-state">No customers match.</td></tr>';
    _setPager('cust', 0, 1); return;
  }
  tbody.innerHTML = slice.map(c => `<tr data-seg="${c.industry}">
    <td><button class="link-btn" onclick="viewCustomer('${c.customerCode}')" style="font-weight:500;text-align:left;display:block">${c.companyName}</button><div style="font-size:11px;color:var(--txt2);font-family:var(--font-mono)">${c.customerCode}</div></td>
    <td><span class="status-badge ${c.industry==='Mining'?'badge-approved':c.industry==='Engineering'?'badge-received':'badge-partial'}">${c.industry}</span></td>
    <td class="amount">${fmt(c.creditLimit)}</td>
    <td class="amount ${c.currentBalance>0?'negative':''}">${fmt(c.currentBalance)}</td>
    <td><span class="status-badge ${bc(c.status)}">${c.status}</span></td>
    <td><button class="row-menu-btn" onclick="rowMenu(this,'customer','${c.customerCode}')">⋯</button></td>
  </tr>`).join('');
  _setPager('cust', total, st.page);
  _wireSortHeaders('cust-tbody','cust',[
    {label:'Company',field:'companyName'},{label:'Industry',field:'industry'},
    {label:'Credit Limit',field:'creditLimit'},{label:'Balance',field:'currentBalance'},
    {label:'Status',field:'status'},{label:'',field:null}
  ]);
}

// ─── Paginated renderSuppliers ───────────────────────────────
function renderSuppliers() {
  const tbody = document.getElementById('sup-tbody'); if (!tbody) return;
  const st = _tbl.sup;
  const q = st.q.toLowerCase();
  const cat = (document.getElementById('sup-cat-filter')?.value||'').toLowerCase();
  const sstatus = document.getElementById('sup-status-filter')?.value||'';
  let rows = suppliers.filter(s =>
    (!q || (s.companyName+s.supplierCode+s.contact+s.category).toLowerCase().includes(q)) &&
    (!cat || s.category?.toLowerCase()===cat) &&
    (!sstatus || s.status===sstatus)
  );
  rows = _sortRows(rows, st.sort, st.dir);
  const total = rows.length;
  const slice = rows.slice((st.page-1)*PAGE_SIZE, st.page*PAGE_SIZE);
  if (!slice.length) {
    tbody.innerHTML = '<tr><td colspan="6" class="empty-state">No suppliers match.</td></tr>';
    _setPager('sup', 0, 1); return;
  }
  tbody.innerHTML = slice.map(s => `<tr data-cat="${s.category}">
    <td><button class="link-btn" onclick="viewSupplier('${s.supplierCode}')" style="font-weight:500;text-align:left">${s.companyName}</button><div style="font-size:11px;color:var(--txt2);font-family:var(--font-mono)">${s.supplierCode}</div></td>
    <td><span class="status-badge badge-draft" style="font-size:10px">${s.category}</span></td>
    <td style="font-family:var(--font-mono);font-size:12px">${s.leadTime} days</td>
    <td class="amount">${fmt(s.spend)}</td>
    <td><span class="status-badge ${bc(s.status)}">${s.status}</span></td>
    <td><button class="row-menu-btn" onclick="rowMenu(this,'supplier','${s.supplierCode}')">⋯</button></td>
  </tr>`).join('');
  _setPager('sup', total, st.page);
  _wireSortHeaders('sup-tbody','sup',[
    {label:'Company',field:'companyName'},{label:'Category',field:'category'},
    {label:'Lead Time',field:'leadTime'},{label:'Spend',field:'spend'},
    {label:'Status',field:'status'},{label:'',field:null}
  ]);
}

// ─── Paginated renderInvoices ────────────────────────────────
function renderInvoices() {
  const tb = document.getElementById('inv-tbody'); if (!tb) return;
  const st = _tbl.inv;
  const q = st.q.toLowerCase();
  const from = st.from || document.getElementById('inv-from')?.value || '';
  const to   = st.to   || document.getElementById('inv-to')?.value   || '';
  const stat = st.status || document.getElementById('inv-status-sel')?.value || '';
  const icust = st.cust || document.getElementById('inv-cust-filter')?.value || '';
  // Populate customer dropdown
  const icustEl = document.getElementById('inv-cust-filter');
  if (icustEl && icustEl.options.length<=1) {
    const custNames = [...new Set(invoices.map(i=>i.customerName||i.customer||'').filter(Boolean))].sort();
    custNames.forEach(n=>{const o=document.createElement('option');o.value=n;o.textContent=n;icustEl.appendChild(o);});
  }
  let rows = invoices.filter(i =>
    (!q || (i.id+i.customerName+i.customer+i.projectName).toLowerCase().includes(q)) &&
    (!stat || i.status===stat) &&
    (!icust || (i.customerName||i.customer||'')=== icust) &&
    (!from || (i.issued||'')>=from) &&
    (!to   || (i.issued||'')<=to)
  );
  rows = _sortRows(rows, st.sort, st.dir);
  const total = rows.length;
  const slice = rows.slice((st.page-1)*PAGE_SIZE, st.page*PAGE_SIZE);
  if (!slice.length) {
    tb.innerHTML = '<tr><td colspan="11" class="empty-state">No invoices match.</td></tr>';
    _setPager('inv', 0, 1); return;
  }
  tb.innerHTML = slice.map(i => {
    const bal = Math.max(0,i.amount-i.paid);
    const pct = i.amount>0 ? Math.min(100,Math.round((i.paid/i.amount)*100)) : 0;
    const cust = customers.find(c=>c.customerCode===i.customerCode||c.companyName===(i.customerName||i.customer));
    const barColor = pct>=100?'var(--green)':pct>0?'var(--amber)':'var(--border2)';
    const settleBtn = bal>0 ? `<button class="settle-btn" onclick="settleInvoice('${i.id}')" title="Settle ${fmt(bal)}">Settle</button>` : '';
    return `<tr data-status="${i.status}" data-issued="${i.issued||''}">
    <td><button class="link-btn" onclick="viewInvoice('${i.id}')" style="font-family:var(--font-mono);font-size:12px;color:var(--blue)">${i.id}</button></td>
    <td>${cust?`<button class="link-btn" onclick="viewCustomer('${cust.customerCode}')">${i.customerName||i.customer}</button>`:(i.customerName||i.customer)}</td>
    <td style="font-size:11px;color:var(--txt2)">${i.projectName||'Unlinked'}</td>
    <td style="font-family:var(--font-mono);font-size:11px">${i.issued}</td>
    <td style="font-family:var(--font-mono);font-size:11px;color:${i.status==='Overdue'?'var(--red)':'inherit'}">${i.due}</td>
    <td class="amount">${fmt(i.amount)}</td>
    <td class="amount"><div style="font-weight:500;color:${i.paid>0?'var(--green)':'var(--txt3)'}">${fmt(i.paid)}</div><div class="pay-bar-wrap"><div class="pay-bar-fill" style="width:${pct}%;background:${barColor}"></div></div><div style="font-size:9px;color:var(--txt3);font-family:var(--font-mono)">${pct}% paid</div></td>
    <td class="amount ${bal>0?'negative':''}">${fmt(bal)}</td>
    <td><span class="status-badge ${bc(i.status)}">${i.status}</span></td>
    <td style="white-space:nowrap">${settleBtn}<button class="row-menu-btn" onclick="rowMenu(this,'invoice','${i.id}')">⋯</button></td></tr>`;
  }).join('');
  _setPager('inv', total, st.page);
  _wireSortHeaders('inv-tbody','inv',[
    {label:'Invoice #',field:'id'},{label:'Customer',field:'customerName'},
    {label:'Project',field:'projectName'},{label:'Issued',field:'issued'},
    {label:'Due',field:'due'},{label:'Amount',field:'amount'},
    {label:'Paid',field:'paid'},{label:'Balance',field:null},
    {label:'Status',field:'status'},{label:'',field:null}
  ]);
}

function invFilter() {
  _tbl.inv.q = (document.getElementById('inv-search')?.value||'').toLowerCase();
  _tbl.inv.from = document.getElementById('inv-from')?.value||'';
  _tbl.inv.to   = document.getElementById('inv-to')?.value||'';
  _tbl.inv.status = document.getElementById('inv-status-sel')?.value||'';
  _tbl.inv.cust = document.getElementById('inv-cust-filter')?.value||'';
  _tbl.inv.page = 1;
  renderInvoices();
}
function invFilterClear() {
  ['inv-search','inv-from','inv-to','inv-status-sel','inv-cust-filter'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  Object.assign(_tbl.inv, {q:'',from:'',to:'',status:'',cust:'',page:1});
  renderInvoices();
}

// ─── Paginated renderPurchaseOrders ─────────────────────────
function renderPurchaseOrders() {
  const tb = document.getElementById('po-tbody'); if (!tb) return;
  const st = _tbl.po;
  const q  = st.q.toLowerCase();
  const from = st.from || document.getElementById('po-from')?.value || '';
  const to   = st.to   || document.getElementById('po-to')?.value   || '';
  const stat = st.status || document.getElementById('po-status-sel')?.value || '';
  const posup = st.sup || document.getElementById('po-sup-filter')?.value || '';
  // Populate supplier dropdown
  const posupEl = document.getElementById('po-sup-filter');
  if (posupEl && posupEl.options.length<=1) {
    const supNames = [...new Set(purchaseOrders.map(p=>p.supplierName||p.supplier||'').filter(Boolean))].sort();
    supNames.forEach(n=>{const o=document.createElement('option');o.value=n;o.textContent=n;posupEl.appendChild(o);});
  }
  let rows = purchaseOrders.filter(p =>
    (!q || (p.id+p.supplierName+p.supplier+p.projectId).toLowerCase().includes(q)) &&
    (!stat || p.status===stat) &&
    (!posup || (p.supplierName||p.supplier||'')=== posup) &&
    (!from || (p.ordered||'')>=from) &&
    (!to   || (p.ordered||'')<=to)
  );
  rows = _sortRows(rows, st.sort, st.dir);
  const total = rows.length;
  const slice = rows.slice((st.page-1)*PAGE_SIZE, st.page*PAGE_SIZE);
  if (!slice.length) {
    tb.innerHTML = '<tr><td colspan="9" class="empty-state">No purchase orders match.</td></tr>';
    _setPager('po', 0, 1); return;
  }
  tb.innerHTML = slice.map(p => {
    const bal = Math.max(0, p.value - (p.paid||0));
    const pct = p.value>0 ? Math.min(100, Math.round(((p.paid||0)/p.value)*100)) : 0;
    const barColor = pct>=100?'var(--green)':pct>0?'var(--amber)':'var(--border2)';
    const settleBtn = bal>0 ? `<button class="settle-btn" onclick="settlePO('${p.id}')" title="Settle ${fmt(bal)}">Settle</button>` : '';
    return `<tr data-status="${p.status}" data-ordered="${p.ordered||''}">
    <td><button class="link-btn" onclick="viewPurchaseOrder('${p.id}')" style="font-family:var(--font-mono);font-size:12px;color:var(--blue)">${p.id}</button></td>
    <td style="font-weight:500">${p.supplierName||p.supplier}</td>
    <td style="font-size:11px;color:var(--txt2)">${p.projectId||'—'}</td>
    <td style="font-family:var(--font-mono);font-size:11px">${p.ordered||''}</td>
    <td style="font-family:var(--font-mono);font-size:11px">${p.delivery||''}</td>
    <td class="amount">${fmt(p.value)}</td>
    <td class="amount"><div style="font-weight:500;color:${(p.paid||0)>0?'var(--green)':'var(--txt3)'}">${fmt(p.paid||0)}</div><div class="pay-bar-wrap"><div class="pay-bar-fill" style="width:${pct}%;background:${barColor}"></div></div><div style="font-size:9px;color:var(--txt3);font-family:var(--font-mono)">${pct}% paid</div></td>
    <td class="amount ${bal>0?'negative':''}">${fmt(bal)}</td>
    <td><span class="status-badge ${bc(p.status)}">${p.status}</span></td>
    <td style="white-space:nowrap">${settleBtn}<button class="row-menu-btn" onclick="rowMenu(this,'po','${p.id}')">⋯</button></td></tr>`;
  }).join('');
  _setPager('po', total, st.page);
  _wireSortHeaders('po-tbody','po',[
    {label:'PO #',field:'id'},{label:'Supplier',field:'supplierName'},
    {label:'Project',field:'projectId'},{label:'Ordered',field:'ordered'},
    {label:'Delivery',field:'delivery'},{label:'Value',field:'value'},
    {label:'Paid',field:'paid'},{label:'Balance',field:null},
    {label:'Status',field:'status'},{label:'',field:null}
  ]);
}
function poFilter() {
  _tbl.po.q = (document.getElementById('po-search')?.value||'').toLowerCase();
  _tbl.po.from = document.getElementById('po-from')?.value||'';
  _tbl.po.to   = document.getElementById('po-to')?.value||'';
  _tbl.po.status = document.getElementById('po-status-sel')?.value||'';
  _tbl.po.sup = document.getElementById('po-sup-filter')?.value||'';
  _tbl.po.page = 1;
  renderPurchaseOrders();
}
function poFilterClear() {
  ['po-search','po-from','po-to','po-status-sel','po-sup-filter'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  Object.assign(_tbl.po, {q:'',from:'',to:'',status:'',sup:'',page:1});
  renderPurchaseOrders();
}

// ─── Paginated renderProducts ────────────────────────────────
function renderProducts() {
  const tb = document.getElementById('prod-tbody'); if (!tb) return;
  const st = _tbl.prod;
  const q = st.q.toLowerCase();
  const cat = (document.getElementById('prod-cat-filter')?.value||'').toLowerCase();
  let rows = products.filter(p =>
    (!q || (p.name+p.sku+p.category+(p.supplierName||p.supplier||'')).toLowerCase().includes(q)) &&
    (!cat || (p.category||'').toLowerCase()===cat)
  );
  rows = _sortRows(rows, st.sort, st.dir);
  const total = rows.length;
  const slice = rows.slice((st.page-1)*PAGE_SIZE, st.page*PAGE_SIZE);
  if (!slice.length) {
    tb.innerHTML = '<tr><td colspan="6" class="empty-state">No products match.</td></tr>';
    _setPager('prod', 0, 1); return;
  }
  tb.innerHTML = slice.map(p => `<tr data-category="${p.category}">
    <td><button class="link-btn" onclick="viewProduct('${p.id}')" style="font-weight:500;text-align:left;display:block">${p.name}</button><div style="font-family:var(--font-mono);font-size:11px;color:var(--txt2)">${p.sku}</div></td>
    <td><span class="status-badge badge-draft" style="font-size:10px">${p.category}</span></td>
    <td style="font-size:11px;color:var(--txt1)">${p.supplierName||p.supplier}</td>
    <td style="font-family:var(--font-mono);font-size:12px;color:${p.stock<=p.reorder?'var(--amber)':'var(--txt1)'}">${p.stock}</td>
    <td><span class="status-badge ${bc(p.status)}">${p.status}</span></td>
    <td><button class="row-menu-btn" onclick="rowMenu(this,'product','${p.id}')">⋯</button></td>
  </tr>`).join('');
  _setPager('prod', total, st.page);
  _wireSortHeaders('prod-tbody','prod',[
    {label:'Product',field:'name'},{label:'Category',field:'category'},
    {label:'Supplier',field:'supplierName'},{label:'Stock',field:'stock'},
    {label:'Status',field:'status'},{label:'',field:null}
  ]);
}

// ─── Paginated renderQuotes ──────────────────────────────────
function renderQuotes() {
  const tb = document.getElementById('qt-tbody'); if (!tb) return;
  const st = _tbl.qt;
  const q  = st.q.toLowerCase();
  const stat = st.status;
  let rows = quotes.filter(qt =>
    (!q || (qt.id+(qt.customerName||'')+(qt.projectId||'')+(qt.title||'')).toLowerCase().includes(q)) &&
    (!stat || qt.status===stat)
  );
  rows = _sortRows(rows, st.sort, st.dir);
  const slice = rows.slice((st.page-1)*PAGE_SIZE, st.page*PAGE_SIZE);
  if (!slice.length) {
    tb.innerHTML = '<tr><td colspan="9" class="empty-state">No quotes match.</td></tr>';
    _setPager('qt', 0, 1); return;
  }
  const today = todayISO();
  tb.innerHTML = slice.map(q_ => {
    const total_ = (q_.lines||[]).reduce((s,l)=>s+toNum(l.unitPrice,0)*toNum(l.qty,1),0);
    const cost_  = (q_.lines||[]).reduce((s,l)=>s+toNum(l.cost,0)*toNum(l.qty,1),0);
    const margin = total_>0 ? Math.round(((total_-cost_)/total_)*100) : 0;
    const projLink = q_.projectId ? `<span class="status-badge badge-approved" style="cursor:pointer" onclick="openView('projects')">${q_.projectId}</span>` : '<span style="color:var(--txt3);font-size:11px">—</span>';
    const isExpired = q_.validUntil && q_.validUntil < today && q_.status !== 'Accepted';
    return `<tr data-status="${q_.status}">
    <td><button class="link-btn" onclick="viewQuote('${q_.id}')" style="font-family:var(--font-mono);font-size:12px;color:var(--blue)">${q_.id}</button></td>
    <td style="font-weight:500">${q_.customerName||''}</td>
    <td>${projLink}</td>
    <td style="font-size:11px;font-family:var(--font-mono)">${q_.created||''}</td>
    <td style="font-size:11px;font-family:var(--font-mono);color:${isExpired?'var(--red)':'inherit'}">${q_.validUntil||''}</td>
    <td class="amount">${fmt(total_)}</td>
    <td class="amount" style="color:${margin>=30?'var(--green)':margin>=15?'var(--amber)':'var(--red)'}">${margin}%</td>
    <td><span class="status-badge ${bc(q_.status)}">${q_.status}</span></td>
    <td><button class="row-menu-btn" onclick="rowMenu(this,'quote','${q_.id}')">⋯</button></td>
    </tr>`;
  }).join('');
  _setPager('qt', rows.length, st.page);
  _wireSortHeaders('qt-tbody','qt',[
    {label:'Quote #',field:'id'},{label:'Customer',field:'customerName'},
    {label:'Project',field:'projectId'},
    {label:'Created',field:'created'},{label:'Valid Until',field:'validUntil'},
    {label:'Total',field:null},{label:'Margin',field:null},
    {label:'Status',field:'status'},{label:'',field:null}
  ]);
}

// ─── Paginated renderProjects ────────────────────────────────
function renderProjects() {
  const tb = document.getElementById('proj-tbody'); if (!tb) return;
  const st = _tbl.proj;
  const q = st.q.toLowerCase();
  const stat = document.getElementById('proj-status-filter')?.value || st.status || '';
  const pcust = document.getElementById('proj-cust-filter')?.value||'';
  // Populate customer dropdown dynamically
  const pcustEl = document.getElementById('proj-cust-filter');
  if (pcustEl && pcustEl.options.length<=1) {
    const custNames = [...new Set(projects.map(p=>p.customer||p.manager||'').filter(Boolean))].sort();
    custNames.forEach(n=>{const o=document.createElement('option');o.value=n;o.textContent=n;pcustEl.appendChild(o);});
  }
  let rows = projects.filter(p =>
    (!q || (p.id+p.name+(p.manager||'')+(p.site||'')).toLowerCase().includes(q)) &&
    (!stat || p.status===stat) &&
    (!pcust || (p.customer||p.manager||'')=== pcust)
  );
  rows = _sortRows(rows, st.sort, st.dir);
  const total = rows.length;
  const slice = rows.slice((st.page-1)*PAGE_SIZE, st.page*PAGE_SIZE);
  if (!slice.length) {
    tb.innerHTML = '<tr><td colspan="8" class="empty-state">No projects match.</td></tr>';
    _setPager('proj', 0, 1); return;
  }
  tb.innerHTML = slice.map(p => {
    const budgetPct = p.budget>0 ? Math.min(100,Math.round((p.actualCost/p.budget)*100)) : 0;
    const pBarColor = budgetPct>90?'var(--red)':budgetPct>70?'var(--amber)':'var(--green)';
    const hubBtn = p.status==='In Progress' ? `<button class="settle-btn" onclick="openConstructionHub('${p.id}')" title="Open Construction Hub" style="background:rgba(245,166,35,.12);border-color:var(--amber);color:var(--amber)">🏗 Hub</button>` : '';
    return `<tr data-status="${p.status}">
    <td><button class="link-btn" onclick="viewProject('${p.id}')" style="font-weight:500;text-align:left;display:block">${p.name}</button><div style="font-size:11px;color:var(--txt2);font-family:var(--font-mono)">${p.id}</div></td>
    <td style="font-size:12px">${p.manager||'—'}</td>
    <td style="font-size:11px;color:var(--txt2)">${p.site||'—'}</td>
    <td class="amount">${fmt(p.budget)}</td>
    <td class="amount">
      <div style="font-family:var(--font-mono);font-size:12px;color:${pBarColor}">${fmt(p.actualCost)}</div>
      <div class="pay-bar-wrap"><div class="pay-bar-fill" style="width:${budgetPct}%;background:${pBarColor}"></div></div>
      <div style="font-size:9px;color:var(--txt3);font-family:var(--font-mono)">${budgetPct}% used</div>
    </td>
    <td><span class="status-badge ${bc(p.status)}">${p.status}</span></td>
    <td style="white-space:nowrap">${hubBtn}<button class="row-menu-btn" onclick="rowMenu(this,'project','${p.id}','${p.status}')">⋯</button></td>
    </tr>`;
  }).join('');
  _setPager('proj', total, st.page);
  _wireSortHeaders('proj-tbody','proj',[
    {label:'Project',field:'name'},{label:'Customer',field:'customer'},
    {label:'Start',field:'start'},{label:'End',field:'end'},
    {label:'Budget',field:'budget'},{label:'Actual Cost',field:'actualCost'},
    {label:'Status',field:'status'},{label:'',field:null}
  ]);
}

// ─── Paginated renderTransactions ───────────────────────────
function renderTransactions() {
  const tb = document.getElementById('txn-tbody'); if (!tb) return;
  const st = _tbl.txn;
  const filters = getTransactionFilters();
  const q = st.q.toLowerCase();
  let rows = companyTransactions.filter(t =>
    (!q || (t.ref+t.party+t.description+t.category).toLowerCase().includes(q)) &&
    matchDateFilters(t.date, filters) &&
    (!filters.type || t.type===filters.type) &&
    (!filters.customerCode || t.customerCode===filters.customerCode) &&
    (!filters.supplierCode || t.supplierCode===filters.supplierCode) &&
    (!filters.projectId || t.projectId===filters.projectId)
  );
  rows = _sortRows(rows, st.sort, st.dir);
  const total = rows.length;
  const slice = rows.slice((st.page-1)*PAGE_SIZE, st.page*PAGE_SIZE);
  if (!slice.length) {
    tb.innerHTML = '<tr><td colspan="9" class="empty-state">No transactions match.</td></tr>';
    _setPager('txn', 0, 1); return;
  }
  tb.innerHTML = slice.map(t => `<tr>
    <td style="font-family:var(--font-mono);font-size:11px">${t.date}</td>
    <td style="font-family:var(--font-mono);font-size:11px;color:var(--blue)">${t.ref}</td>
    <td><span class="status-badge ${t.type==='Inflow'?'badge-approved':'badge-overdue'}" style="font-size:10px">${t.type}</span></td>
    <td style="font-size:11px">${t.category||'—'}</td>
    <td style="font-size:12px">${t.party||'—'}</td>
    <td style="font-size:11px;color:var(--txt2)">${t.description||'—'}</td>
    <td class="amount positive">${t.type==='Inflow'?fmt(t.amount):'—'}</td>
    <td class="amount negative">${t.type==='Outflow'?fmt(t.amount):'—'}</td>
    <td><button class="row-menu-btn" onclick="rowMenu(this,'transaction','${t.ref}')">⋯</button></td>
  </tr>`).join('');
  _setPager('txn', total, st.page);
  _wireSortHeaders('txn-tbody','txn',[
    {label:'Date',field:'date'},{label:'Ref',field:'ref'},
    {label:'Type',field:'type'},{label:'Category',field:'category'},
    {label:'Party',field:'party'},{label:'Description',field:'description'},
    {label:'Inflow',field:null},{label:'Outflow',field:null},{label:'',field:null}
  ]);
}

// ─── Paginated renderStatements ──────────────────────────────
function populateStmtCustomers() {
  const sel = document.getElementById('stmt-cust'); if (!sel) return;
  const current = sel.value;
  // Only rebuild if still just the default placeholder
  if (sel.options.length <= 1) {
    sel.innerHTML = '<option>All Customers</option>' +
      customers.slice().sort((a,b)=>a.companyName.localeCompare(b.companyName))
        .map(c=>`<option value="${c.companyName}">${c.companyName}</option>`).join('');
  }
  if (current) sel.value = current;
}

function renderStatements() {
  const tbody = document.getElementById('stmt-tbody'); if (!tbody) return;
  populateStatementPeriods();
  populateStmtCustomers();
  const customerSel = document.getElementById('stmt-cust');
  const selectedName = customerSel?.value||'All Customers';
  const selectedCustomer = customers.find(c=>c.companyName===selectedName);
  let rows = getStatementRowsByCustomer(selectedCustomer?.customerCode||'');
  if (!rows.length) {
    tbody.innerHTML = '<tr><td colspan="9" class="empty-state">No statement entries for selected customer and period.</td></tr>';
    renderStatementSummary([]);
    _setPager('stmt', 0, 1); return;
  }
  let running = 0;
  const withBalance = rows.map(r => {
    running += toNum(r.debit,0) - toNum(r.credit,0);
    return {...r, bal: Math.max(0, running)};
  });
  renderStatementSummary(withBalance);
  const st = _tbl.stmt;
  const total = withBalance.length;
  const slice = withBalance.slice((st.page-1)*PAGE_SIZE, st.page*PAGE_SIZE);
  tbody.innerHTML = slice.map(s => {
    const inv = invoices.find(i=>i.id===s.ref);
    const outstanding = inv ? Math.max(0,inv.amount-inv.paid) : null;
    const outCell = outstanding!==null
      ? `<td class="amount ${outstanding>0?'negative':'positive'}" style="font-size:11px">${outstanding>0?`<button class="link-btn" onclick="viewInvoice('${s.ref}')">${fmt(outstanding)}</button>`:'✓ Paid'}</td>`
      : `<td style="color:var(--txt3);font-size:11px">&mdash;</td>`;
    return `<tr>
    <td style="font-family:var(--font-mono);font-size:11px">${s.date}</td>
    <td style="font-family:var(--font-mono);font-size:11px">${inv?`<button class="link-btn" onclick="viewInvoice('${s.ref}')" style="color:var(--blue)">${s.ref}</button>`:s.ref}</td>
    <td style="font-size:12px">${s.desc}</td>
    <td class="amount ${s.debit>0?'negative':''}">${s.debit>0?fmt(s.debit):'&mdash;'}</td>
    <td class="amount ${s.credit>0?'positive':''}">${s.credit>0?fmt(s.credit):'&mdash;'}</td>
    <td class="amount">${fmt(s.bal)}</td>
    ${outCell}
    <td><span class="status-badge ${bc(s.status)}">${s.status}</span></td>
    <td><button class="row-menu-btn" onclick="rowMenu(this,'statement','${s.ref}')">⋯</button></td>
    </tr>`;
  }).join('');
  _setPager('stmt', total, st.page);
}

// ════════════════════════════════════════════════════════════════
//  ANALYTICS TABS
// ════════════════════════════════════════════════════════════════
let _anTab = 'overview';
let _anCharts = {};

function switchAnalyticsTab(name, btn) {
  _anTab = name;
  document.querySelectorAll('.analytics-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  else document.getElementById('an-tab-'+name)?.classList.add('active');
  document.querySelectorAll('.analytics-tab-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('an-panel-'+name)?.classList.add('active');
  renderAnalyticsTab(name);
}

function renderAnalyticsTab(name) {
  if (name === 'overview') { updateAnalytics(); return; }
  if (name === 'revenue')    { _renderAnRevenue(); return; }
  if (name === 'projects')   { _renderAnProjects(); return; }
  if (name === 'finance')    { _renderAnFinance(); return; }
  if (name === 'customers')  { _renderAnCustomers(); return; }
  if (name === 'quotes')     { _renderAnQuotes(); return; }
  if (name === 'operations') { _renderAnOperations(); return; }
}

function _anKpi(id, label, value, meta, metaClass='') {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `<div class="an-kpi-label">${label}</div><div class="an-kpi-value">${value}</div><div class="an-kpi-meta ${metaClass}">${meta}</div>`;
}

function _anKpiRow(containerId, kpis) {
  const el = document.getElementById(containerId); if (!el) return;
  el.innerHTML = kpis.map(k =>
    `<div class="an-kpi"><div class="an-kpi-label">${k.label}</div><div class="an-kpi-value" style="color:${k.color||'var(--txt0)'}">${k.value}</div><div class="an-kpi-meta ${k.cls||''}">${k.meta||''}</div></div>`
  ).join('');
}

function _destroyChart(id) {
  if (_anCharts[id]) { try { _anCharts[id].destroy(); } catch(e){} delete _anCharts[id]; }
}

function _mkChart(id, type, labels, datasets, opts={}) {
  _destroyChart(id);
  const canvas = document.getElementById(id); if (!canvas) return;
  const chartColors = { grid:'rgba(255,255,255,.06)', tick:'rgba(255,255,255,.35)' };
  _anCharts[id] = new Chart(canvas, {
    type,
    data: { labels, datasets },
    options: {
      responsive: true, maintainAspectRatio: false, animation: { duration: 400 },
      plugins: { legend: { display: opts.legend||false, labels:{color:'rgba(255,255,255,.6)',font:{size:11}} } },
      scales: type==='pie'||type==='doughnut' ? {} : {
        x: { grid:{color:chartColors.grid}, ticks:{color:chartColors.tick,font:{size:10}} },
        y: { grid:{color:chartColors.grid}, ticks:{color:chartColors.tick,font:{size:10}, callback: opts.yFmt||undefined} },
        ...(opts.stacked ? {x:{stacked:true,grid:{color:chartColors.grid},ticks:{color:chartColors.tick}}, y:{stacked:true,grid:{color:chartColors.grid},ticks:{color:chartColors.tick}}} : {})
      },
      ...opts.extra
    }
  });
}

// ─── Revenue tab ─────────────────────────────────────────────
function _renderAnRevenue() {
  const filters = readAnalyticsFilters();
  const invRows = invoices.filter(i => matchDateFilters(i.issued, filters));
  const totalRev = invRows.reduce((s,i)=>s+toNum(i.amount,0),0);
  const totalPaid = invRows.reduce((s,i)=>s+toNum(i.paid,0),0);
  const avgInv = invRows.length ? totalRev/invRows.length : 0;
  const byMonth = {};
  invRows.forEach(i => {
    const m = (i.issued||'').slice(0,7);
    if (m) byMonth[m] = (byMonth[m]||0) + toNum(i.amount,0);
  });
  const months = Object.keys(byMonth).sort().slice(-12);
  const revVals = months.map(m => byMonth[m]||0);
  _anKpiRow('an-rev-kpis', [
    {label:'Total Revenue',value:fmtShort(totalRev),color:'var(--green)',meta:'All invoiced',cls:'up'},
    {label:'Total Collected',value:fmtShort(totalPaid),color:'var(--blue)',meta:`${totalRev>0?Math.round(totalPaid/totalRev*100):0}% collection rate`},
    {label:'Avg Invoice',value:fmtShort(avgInv),color:'var(--amber)',meta:`${invRows.length} invoices`},
    {label:'Outstanding AR',value:fmtShort(totalRev-totalPaid),color:'var(--red)',meta:'Uncollected',cls:'dn'},
  ]);
  _mkChart('an-rev-trend', 'line', months, [{
    label:'Revenue', data:revVals, borderColor:'#4f8ef7', backgroundColor:'rgba(79,142,247,.12)',
    fill:true, tension:.35, pointRadius:3
  }], {yFmt: v => 'R'+fmtShort(v)});
  // By sector
  const bySector = {};
  invRows.forEach(i => {
    const c = customers.find(x=>x.customerCode===i.customerCode||x.companyName===(i.customerName||i.customer));
    const seg = c?.industry||c?.segment||'Other';
    bySector[seg] = (bySector[seg]||0) + toNum(i.amount,0);
  });
  const secLabels = Object.keys(bySector);
  const secVals = secLabels.map(k=>bySector[k]);
  const secColors = ['#4f8ef7','#22c55e','#f5a623','#a855f7','#14b8a6','#ef4444'];
  _mkChart('an-rev-sector','doughnut',secLabels,[{data:secVals,backgroundColor:secColors,borderWidth:0}],{legend:true});
  // Top customers bar list
  const byCust = {};
  invRows.forEach(i => { const k=i.customerName||i.customer||'Unknown'; byCust[k]=(byCust[k]||0)+toNum(i.amount,0); });
  const top = Object.entries(byCust).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const el = document.getElementById('an-rev-top-cust'); if (el) renderTopCustomers(top.map(([name,val])=>({name,val})),'an-rev-top-cust');
}

// ─── Projects tab ─────────────────────────────────────────────
function _renderAnProjects() {
  const active = projects.filter(p=>p.status==='In Progress');
  const completed = projects.filter(p=>p.status==='Completed');
  const totalBudget = projects.reduce((s,p)=>s+toNum(p.budget,0),0);
  const totalActual = projects.reduce((s,p)=>s+toNum(p.actualCost,0),0);
  const variance = totalBudget - totalActual;
  _anKpiRow('an-proj-kpis', [
    {label:'Total Projects',value:projects.length,color:'var(--blue)',meta:`${active.length} active`},
    {label:'Total Budget',value:fmtShort(totalBudget),color:'var(--txt0)',meta:'All projects'},
    {label:'Total Spent',value:fmtShort(totalActual),color:totalActual>totalBudget?'var(--red)':'var(--green)',meta:`${totalBudget>0?Math.round(totalActual/totalBudget*100):0}% used`},
    {label:'Budget Variance',value:fmtShort(Math.abs(variance)),color:variance>=0?'var(--green)':'var(--red)',meta:variance>=0?'Under budget':'Over budget',cls:variance>=0?'up':'dn'},
    {label:'Completed',value:completed.length,color:'var(--green)',meta:'Projects finished'},
  ]);
  const labels = active.slice(0,10).map(p=>p.id);
  const budgets = active.slice(0,10).map(p=>toNum(p.budget,0));
  const actuals = active.slice(0,10).map(p=>toNum(p.actualCost,0));
  _mkChart('an-proj-budget','bar',labels,[
    {label:'Budget',data:budgets,backgroundColor:'rgba(79,142,247,.5)',borderColor:'#4f8ef7',borderWidth:1},
    {label:'Actual',data:actuals,backgroundColor:'rgba(245,166,35,.5)',borderColor:'#f5a623',borderWidth:1}
  ],{legend:true,yFmt:v=>'R'+fmtShort(v)});
  const statuses = {};
  projects.forEach(p=>{ statuses[p.status]=(statuses[p.status]||0)+1; });
  const sKeys=Object.keys(statuses);
  _mkChart('an-proj-status','doughnut',sKeys,[{data:sKeys.map(k=>statuses[k]),backgroundColor:['#4f8ef7','#22c55e','#f5a623','#ef4444','#a855f7'],borderWidth:0}],{legend:true});
  const tb = document.getElementById('an-proj-table'); if (!tb) return;
  tb.innerHTML = projects.map(p => {
    const invRev = invoices.filter(i=>i.projectId===p.id).reduce((s,i)=>s+toNum(i.amount,0),0);
    const margin = invRev>0 ? Math.round(((invRev-toNum(p.actualCost,0))/invRev)*100) : 0;
    const budgetPct = p.budget>0 ? Math.round((p.actualCost/p.budget)*100) : 0;
    return `<tr>
    <td><button class="link-btn" onclick="viewProject('${p.id}')" style="font-weight:500">${p.name}</button><div style="font-size:10px;color:var(--txt2);font-family:var(--font-mono)">${p.id}</div></td>
    <td style="font-size:11px">${p.manager||'—'}</td>
    <td class="amount">${fmt(p.budget)}</td>
    <td class="amount" style="color:${budgetPct>90?'var(--red)':budgetPct>70?'var(--amber)':'inherit'}">${fmt(p.actualCost)}</td>
    <td class="amount positive">${fmt(invRev)}</td>
    <td class="amount" style="color:${margin>=20?'var(--green)':margin>=0?'var(--amber)':'var(--red)'}">${margin}%</td>
    <td><span class="status-badge ${bc(p.status)}">${p.status}</span></td></tr>`;
  }).join('');
}

// ─── Finance tab ──────────────────────────────────────────────
function _renderAnFinance() {
  const totalAR = invoices.reduce((s,i)=>s+Math.max(0,toNum(i.amount,0)-toNum(i.paid,0)),0);
  const totalAP = purchaseOrders.reduce((s,p)=>s+Math.max(0,toNum(p.value,0)-(toNum(p.paid,0))),0);
  const totalInflow = companyTransactions.filter(t=>t.type==='Inflow').reduce((s,t)=>s+toNum(t.amount,0),0);
  const totalOutflow = companyTransactions.filter(t=>t.type==='Outflow').reduce((s,t)=>s+toNum(t.amount,0),0);
  const overdue = invoices.filter(i=>i.status==='Overdue').reduce((s,i)=>s+Math.max(0,toNum(i.amount,0)-toNum(i.paid,0)),0);
  _anKpiRow('an-fin-kpis', [
    {label:'Total Inflows',value:fmtShort(totalInflow),color:'var(--green)',meta:'All time received',cls:'up'},
    {label:'Total Outflows',value:fmtShort(totalOutflow),color:'var(--red)',meta:'All time paid',cls:'dn'},
    {label:'Net Cash',value:fmtShort(totalInflow-totalOutflow),color:totalInflow>=totalOutflow?'var(--green)':'var(--red)',meta:'Inflow minus outflow',cls:totalInflow>=totalOutflow?'up':'dn'},
    {label:'Accounts Receivable',value:fmtShort(totalAR),color:'var(--amber)',meta:'Outstanding invoices',cls:'warn'},
    {label:'Accounts Payable',value:fmtShort(totalAP),color:'var(--amber)',meta:'Outstanding POs',cls:'warn'},
    {label:'Overdue AR',value:fmtShort(overdue),color:'var(--red)',meta:'Past due date',cls:'dn'},
  ]);
  // 12-month cashflow
  const months12 = [], inflows12 = [], outflows12 = [];
  for (let i=11; i>=0; i--) {
    const d = new Date(); d.setMonth(d.getMonth()-i);
    const m = d.toISOString().slice(0,7);
    months12.push(m.slice(5)+'/'+(m.slice(2,4)));
    inflows12.push(companyTransactions.filter(t=>t.type==='Inflow'&&(t.date||'').startsWith(m)).reduce((s,t)=>s+toNum(t.amount,0),0));
    outflows12.push(companyTransactions.filter(t=>t.type==='Outflow'&&(t.date||'').startsWith(m)).reduce((s,t)=>s+toNum(t.amount,0),0));
  }
  _mkChart('an-fin-cashflow','bar',months12,[
    {label:'Inflow',data:inflows12,backgroundColor:'rgba(34,197,94,.5)',borderColor:'#22c55e',borderWidth:1},
    {label:'Outflow',data:outflows12,backgroundColor:'rgba(239,68,68,.4)',borderColor:'#ef4444',borderWidth:1}
  ],{legend:true,yFmt:v=>'R'+fmtShort(v)});
  // AR aging
  const today = new Date();
  const ageBuckets = {'0-30':0,'31-60':0,'61-90':0,'90+':0};
  invoices.filter(i=>i.status!=='Paid').forEach(i=>{
    const days = Math.max(0,Math.floor((today-new Date(i.due+'T00:00:00'))/86400000));
    const amt = Math.max(0,toNum(i.amount,0)-toNum(i.paid,0));
    if (days<=30) ageBuckets['0-30']+=amt;
    else if (days<=60) ageBuckets['31-60']+=amt;
    else if (days<=90) ageBuckets['61-90']+=amt;
    else ageBuckets['90+']+=amt;
  });
  _mkChart('an-fin-aging','bar',Object.keys(ageBuckets),[{data:Object.values(ageBuckets),backgroundColor:['#22c55e','#f5a623','#ef4444','#7c0000'],borderWidth:0}],{yFmt:v=>'R'+fmtShort(v)});
  // Invoice status donut
  const invStat={}; invoices.forEach(i=>{invStat[i.status]=(invStat[i.status]||0)+1;});
  _mkChart('an-fin-inv-status','doughnut',Object.keys(invStat),[{data:Object.values(invStat),backgroundColor:['#22c55e','#4f8ef7','#f5a623','#ef4444','#a855f7'],borderWidth:0}],{legend:true});
  // PO status donut
  const poStat={}; purchaseOrders.forEach(p=>{poStat[p.status]=(poStat[p.status]||0)+1;});
  _mkChart('an-fin-po-status','doughnut',Object.keys(poStat),[{data:Object.values(poStat),backgroundColor:['#22c55e','#4f8ef7','#f5a623','#ef4444'],borderWidth:0}],{legend:true});
  // Supplier spend bar
  const supSpendMap={};
  purchaseOrders.forEach(p=>{const k=p.supplierName||p.supplier||'Unknown';supSpendMap[k]=(supSpendMap[k]||0)+toNum(p.value,0);});
  const topSup=Object.entries(supSpendMap).sort((a,b)=>b[1]-a[1]).slice(0,8);
  _mkChart('an-fin-sup-spend','bar',topSup.map(([k])=>k),[{data:topSup.map(([,v])=>v),backgroundColor:'rgba(20,184,166,.5)',borderColor:'#14b8a6',borderWidth:1}],{yFmt:v=>'R'+fmtShort(v)});
}

// ─── Customers tab ────────────────────────────────────────────
function _renderAnCustomers() {
  const active = customers.filter(c=>c.status==='Active').length;
  const totalCredit = customers.reduce((s,c)=>s+toNum(c.creditLimit,0),0);
  const totalBalance = customers.reduce((s,c)=>s+toNum(c.currentBalance,0),0);
  _anKpiRow('an-cust-kpis', [
    {label:'Total Customers',value:customers.length,color:'var(--blue)',meta:`${active} active`},
    {label:'Total Credit Extended',value:fmtShort(totalCredit),color:'var(--amber)',meta:'Combined credit limits'},
    {label:'Outstanding Balances',value:fmtShort(totalBalance),color:'var(--red)',meta:'Across all accounts',cls:'warn'},
    {label:'Avg Balance',value:fmtShort(customers.length?totalBalance/customers.length:0),color:'var(--txt0)',meta:'Per customer'},
  ]);
  // Revenue by customer (an-cust-revenue)
  const revMap={};
  invoices.forEach(i=>{const k=i.customerName||i.customer||'Unknown';revMap[k]=(revMap[k]||0)+toNum(i.amount,0);});
  const topCust=Object.entries(revMap).sort((a,b)=>b[1]-a[1]).slice(0,10);
  _mkChart('an-cust-revenue','bar',topCust.map(([k])=>k),
    [{data:topCust.map(([,v])=>v),backgroundColor:'rgba(79,142,247,.5)',borderColor:'#4f8ef7',borderWidth:1}],
    {yFmt:v=>'R'+fmtShort(v)});
  // Customers by Industry (an-cust-industry)
  const industryMap={};
  customers.forEach(c=>{const ind=c.industry||c.segment||'Other';industryMap[ind]=(industryMap[ind]||0)+1;});
  const indLabels=Object.keys(industryMap);
  const indColors=['#4f8ef7','#22c55e','#f5a623','#a855f7','#14b8a6','#ef4444','#f97316','#06b6d4'];
  _mkChart('an-cust-industry','doughnut',indLabels,
    [{data:indLabels.map(k=>industryMap[k]),backgroundColor:indColors.slice(0,indLabels.length),borderWidth:0}],
    {legend:true});
  // Customer Health Overview table (an-cust-table)
  const tb=document.getElementById('an-cust-table'); if(!tb) return;
  // Build per-customer invoice aggregates
  const custInvMap={};
  invoices.forEach(i=>{
    const code=i.customerCode||i.customerName||i.customer||'Unknown';
    if(!custInvMap[code]) custInvMap[code]={invoiced:0,paid:0,overdue:0};
    custInvMap[code].invoiced+=toNum(i.amount,0);
    custInvMap[code].paid+=toNum(i.paid,0);
    if(i.status==='Overdue') custInvMap[code].overdue+=Math.max(0,toNum(i.amount,0)-toNum(i.paid,0));
  });
  tb.innerHTML=customers.map(c=>{
    const agg=custInvMap[c.customerCode]||custInvMap[c.companyName]||{invoiced:0,paid:0,overdue:0};
    const overdueAmt=agg.overdue;
    const statusCls=c.status==='Active'?'badge-paid':c.status==='Inactive'?'badge-overdue':'badge-pending';
    return `<tr>
      <td><button class="link-btn" onclick="viewCustomer('${c.customerCode}')" style="font-weight:500">${c.companyName}</button></td>
      <td style="font-size:11px;color:var(--txt2)">${c.industry||c.segment||'—'}</td>
      <td class="amount">${fmt(c.creditLimit)}</td>
      <td class="amount ${c.currentBalance>0?'negative':''}">${fmt(c.currentBalance)}</td>
      <td class="amount">${fmt(agg.invoiced)}</td>
      <td class="amount positive">${fmt(agg.paid)}</td>
      <td class="amount ${overdueAmt>0?'negative':''}">${overdueAmt>0?fmt(overdueAmt):'—'}</td>
      <td><span class="status-badge ${statusCls}">${c.status||'Unknown'}</span></td>
    </tr>`;
  }).join('');
}

// ─── Quotes tab ───────────────────────────────────────────────
function _renderAnQuotes() {
  const total=quotes.length;
  const accepted=quotes.filter(q=>q.status==='Accepted').length;
  const rejected=quotes.filter(q=>q.status==='Rejected').length;
  const pending=quotes.filter(q=>q.status==='Sent'||q.status==='Draft').length;
  const totalVal=quotes.reduce((s,q)=>s+toNum(q.total||q.amount,0),0);
  const acceptedVal=quotes.filter(q=>q.status==='Accepted').reduce((s,q)=>s+toNum(q.total||q.amount,0),0);
  _anKpiRow('an-qt-kpis',[
    {label:'Total Quotes',value:total,color:'var(--blue)',meta:`${pending} pending`},
    {label:'Accepted',value:accepted,color:'var(--green)',meta:`${total?Math.round(accepted/total*100):0}% win rate`},
    {label:'Total Quote Value',value:fmtShort(totalVal),color:'var(--amber)',meta:'All quotes'},
    {label:'Accepted Value',value:fmtShort(acceptedVal),color:'var(--green)',meta:'Converted revenue'},
  ]);
  // Quote Pipeline by Status (an-qt-funnel) — bar chart showing value at each stage
  const qStatVal={};
  quotes.forEach(q=>{const s=q.status||'Draft';qStatVal[s]=(qStatVal[s]||0)+toNum(q.total||q.amount,0);});
  const qsKeys=Object.keys(qStatVal);
  const qsColors={'Draft':'rgba(148,163,184,.6)','Sent':'rgba(79,142,247,.6)','Accepted':'rgba(34,197,94,.6)','Rejected':'rgba(239,68,68,.6)','Amended':'rgba(245,166,35,.6)'};
  _mkChart('an-qt-funnel','bar',qsKeys,
    [{data:qsKeys.map(k=>qStatVal[k]),backgroundColor:qsKeys.map(k=>qsColors[k]||'rgba(168,85,247,.6)'),borderWidth:0,borderRadius:4}],
    {yFmt:v=>'R'+fmtShort(v)});
  // Win Rate Trend (an-qt-winrate) — accepted vs rejected by month
  const winByMonth={};
  quotes.forEach(q=>{
    const d=new Date(q.date||q.createdAt||Date.now());
    const m=d.toISOString().slice(0,7);
    if(!winByMonth[m]) winByMonth[m]={acc:0,rej:0};
    if(q.status==='Accepted') winByMonth[m].acc++;
    else if(q.status==='Rejected') winByMonth[m].rej++;
  });
  const wmKeys=Object.keys(winByMonth).sort().slice(-12);
  _mkChart('an-qt-winrate','bar',wmKeys,[
    {label:'Accepted',data:wmKeys.map(m=>winByMonth[m].acc),backgroundColor:'rgba(34,197,94,.55)',borderColor:'#22c55e',borderWidth:1},
    {label:'Rejected',data:wmKeys.map(m=>winByMonth[m].rej),backgroundColor:'rgba(239,68,68,.45)',borderColor:'#ef4444',borderWidth:1}
  ],{legend:true,yFmt:v=>v});
  // Quote Details table (an-qt-table)
  const tb=document.getElementById('an-qt-table'); if(!tb) return;
  const sorted=[...quotes].sort((a,b)=>new Date(b.date||b.createdAt||0)-new Date(a.date||a.createdAt||0));
  tb.innerHTML=sorted.map(q=>{
    const val=toNum(q.total||q.amount,0);
    const cost=toNum(q.cost||q.totalCost||0,0);
    const margin=val>0?Math.round(((val-cost)/val)*100):0;
    const statusCls={Accepted:'badge-paid',Rejected:'badge-overdue',Sent:'badge-pending',Amended:'badge-partial',Draft:'badge-draft'}[q.status]||'badge-draft';
    const issued=(q.date||q.createdAt||'').slice(0,10)||'—';
    return `<tr>
      <td><span style="font-family:var(--font-mono);font-size:11px">${q.id||q.quoteNumber||'—'}</span></td>
      <td>${q.customerName||q.customer||'—'}</td>
      <td class="amount">${fmt(val)}</td>
      <td class="amount">${cost>0?fmt(cost):'—'}</td>
      <td style="color:${margin>=20?'var(--green)':margin>=0?'var(--amber)':'var(--red)'};font-weight:600">${cost>0?margin+'%':'—'}</td>
      <td><span class="status-badge ${statusCls}">${q.status||'Draft'}</span></td>
      <td style="font-size:11px;color:var(--txt2)">${issued}</td>
    </tr>`;
  }).join('');
}

// ─── Operations tab ───────────────────────────────────────────
function _renderAnOperations() {
  const activeProj=projects.filter(p=>p.status==='In Progress').length;
  const totalSuppliers=suppliers.length;
  const totalPOVal=purchaseOrders.reduce((s,p)=>s+toNum(p.value,0),0);
  const openPO=purchaseOrders.filter(p=>p.status==='Pending'||p.status==='Ordered'||p.status==='Issued').length;
  // YTD spend
  const ytdStart=new Date(new Date().getFullYear(),0,1).toISOString().slice(0,10);
  const ytdSpend=purchaseOrders.filter(p=>(p.ordered||p.date||'')>=ytdStart).reduce((s,p)=>s+toNum(p.value,0),0);
  _anKpiRow('an-ops-kpis',[
    {label:'Active Projects',value:activeProj,color:'var(--blue)',meta:`of ${projects.length} total`},
    {label:'Active Suppliers',value:totalSuppliers,color:'var(--txt0)',meta:'On record'},
    {label:'Total PO Value',value:fmtShort(totalPOVal),color:'var(--amber)',meta:'All purchase orders'},
    {label:'Open POs',value:openPO,color:'var(--red)',meta:'Pending / Ordered'},
    {label:'YTD Spend',value:fmtShort(ytdSpend),color:'var(--teal)',meta:'Purchase orders this year'},
  ]);
  // Purchase Orders by Category / YTD spend (an-ops-po-cat)
  const catSpend={};
  purchaseOrders.filter(p=>(p.ordered||p.date||'')>=ytdStart).forEach(po=>{
    const cat=po.category||po.productCategory||'General';
    catSpend[cat]=(catSpend[cat]||0)+toNum(po.value,0);
  });
  // Fall back to all-time if no YTD data
  if(Object.keys(catSpend).length===0){
    purchaseOrders.forEach(po=>{const cat=po.category||po.productCategory||'General';catSpend[cat]=(catSpend[cat]||0)+toNum(po.value,0);});
  }
  const catKeys=Object.keys(catSpend).sort((a,b)=>catSpend[b]-catSpend[a]).slice(0,8);
  const catColors=['#4f8ef7','#22c55e','#f5a623','#a855f7','#14b8a6','#ef4444','#f97316','#06b6d4'];
  _mkChart('an-ops-po-cat','doughnut',catKeys,
    [{data:catKeys.map(k=>catSpend[k]),backgroundColor:catColors.slice(0,catKeys.length),borderWidth:0}],
    {legend:true});
  // Supplier Performance (an-ops-suppliers) — top suppliers by spend
  const supSpend={};
  purchaseOrders.forEach(po=>{
    const key=po.supplierName||po.supplier||'Unknown';
    supSpend[key]=(supSpend[key]||0)+toNum(po.value,0);
  });
  const topSup=Object.entries(supSpend).sort((a,b)=>b[1]-a[1]).slice(0,8);
  _mkChart('an-ops-suppliers','bar',topSup.map(e=>e[0]),
    [{label:'Spend (R)',data:topSup.map(e=>e[1]),backgroundColor:'rgba(168,85,247,.5)',borderColor:'#a855f7',borderWidth:1,borderRadius:4}],
    {yFmt:v=>'R'+fmtShort(v)});
  // Stock Alerts table (an-ops-stock)
  const tb=document.getElementById('an-ops-stock'); if(!tb) return;
  const alerts=products.filter(p=>p.stock<=p.reorderLevel||p.stock<=p.reorder||p.stock<=0).sort((a,b)=>a.stock-b.stock);
  if(alerts.length===0){
    tb.innerHTML='<tr><td colspan="6" class="empty-state">No stock alerts — all products above reorder level</td></tr>';
    return;
  }
  tb.innerHTML=alerts.map(p=>{
    const isOut=p.stock<=0;
    const isLow=!isOut&&p.stock<=(p.reorderLevel||p.reorder||0);
    const statusLabel=isOut?'Out of Stock':'Low Stock';
    const statusCls=isOut?'badge-overdue':'badge-pending';
    return `<tr>
      <td><span style="font-weight:500">${p.name}</span></td>
      <td><span style="font-family:var(--font-mono);font-size:11px">${p.sku||p.id||'—'}</span></td>
      <td style="color:${isOut?'var(--red)':'var(--amber)'};font-weight:600">${p.stock}</td>
      <td style="color:var(--txt2)">${p.reorderLevel||p.reorder||'—'}</td>
      <td>${p.supplierName||p.supplier||'—'}</td>
      <td><span class="status-badge ${statusCls}">${statusLabel}</span></td>
    </tr>`;
  }).join('');
}