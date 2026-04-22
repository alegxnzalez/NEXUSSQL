// HAZMAT_ITEM.js

window.HAZMAT_ITEM = {
  "tables": {
    "HAZMAT_ITEM": {
      "description": "THIS TABLE STORES THE HAZARDOUS MATERIALS INFORMATION THAT IS ITEM CENTRIC.  ALL THE TABLE ATTRIBUTES ARE RELATED TO AN ITEM.  THIS TABLE ALONG WITH THE HAZMAT_GENERIC TABLE AND OTHER ASSOCIATED TABLES MAKE UP THE HAZARDOUS MATERIALS DATABASE.",
      "columns": {
        "HAZMAT_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "HAZMAT_ITEM_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM"
},
        "REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REGION",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "HAZMODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "TRANSPORT_MODE",
          "info": "Reference to the transportaion mode.  I.e.) AIR, TRUCK, RAIL etc."
},
        "HAZMAT_GENERIC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_GENERIC",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "HAZMAT_INDICATOR": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Y/N, INDICATES IF HAZARDOUS MATERIAL."
},
        "HOT_INDICATOR": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Y/N, INDICATES HOT TEMPERATURE."
},
        "RESIDUE_INDICATOR": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Y/N, INDICATES LEFT OVER PRODUCT."
},
        "DOT_EXEMPTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_APPROVAL_EXEMPTION",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "ADDITIONAL_TRANSPORT_MSG_GID_1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_TRANSPORT_MESSAGE",
          "info": "Reference to additional transport message instruction."
},
        "ADDITIONAL_TRANSPORT_MSG_GID_2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_TRANSPORT_MESSAGE",
          "info": "Reference to additional transport message instruction."
},
        "STCC_49_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "STCC",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "COMPETENT_AUTHORITY_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_APPROVAL_EXEMPTION",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "HAZARDOUS_DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true
},
        "NET_EXPLOSV_CONTENT_WEIGHT": {
          "type": "NUMBER",
          "nullable": false
},
        "NET_EXPLOSV_CNTNT_WT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
},
        "NET_EXPLOSV_CONTENT_WT_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "IS_LIMITED_QUANTITY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_REPORTABLE_QUANTITY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "RQ_HAZMAT_TECHNICAL_NAME_GID_1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_TECHNICAL_NAME"
},
        "RQ_HAZMAT_TECHNICAL_NAME_GID_2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_TECHNICAL_NAME"
},
        "IS_NOS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "NOS_TECHNICAL_NAME_GID_1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_TECHNICAL_NAME"
},
        "NOS_TECHNICAL_NAME_GID_2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_TECHNICAL_NAME"
},
        "TOXIC_INHALATION_HAZARD_ZONE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
                    "ZONE A",
                    "ZONE B",
                    "ZONE C",
                    "ZONE D"
          ]
},
        "IS_TOXIC_INHALATION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_PASSENGER_AIRCRAFT_FORBID": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_COMMERCIAL_AIRCRAFT_FORBID": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "FLASH_POINT": {
          "type": "NUMBER",
          "nullable": true
},
        "FLASH_POINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "FLASH_POINT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "EMERGENCY_TEMP": {
          "type": "NUMBER",
          "nullable": true
},
        "EMERGENCY_TEMP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "EMERGENCY_TEMP_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "CONTROL_TEMP": {
          "type": "NUMBER",
          "nullable": true
},
        "CONTROL_TEMP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "CONTROL_TEMP_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "IS_MARINE_POLLUTANT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "MP_TECHNICAL_NAME_GID_1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_TECHNICAL_NAME"
},
        "MP_TECHNICAL_NAME_GID_2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_TECHNICAL_NAME"
},
        "IS_OIL_CONTAINED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "ACTIVITY": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "PSN_PREFIX": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "IS_POISON": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "IS_ALL_PACKED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Flag to indicate the pkg is 'All packed in one'"
},
        "AUTHORIZATION": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The authorization for the Dangerous Goods shipment.The authorization field is only required to state special governmental authorizations that are required because of the provisions or packing materials shipped with."
},
        "CHEMICAL_FORMULA": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "The basic chemical description of the substance"
},
        "CONCENTRATION_PERCENT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Required if the Dangerous Goods UN Number is 2031, 1796, 1826, or 1873. Enter the percentage of DG concentration if the above condition applies."
},
        "CRIT_SAFETY_INDEX": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A measurement for packages containing fissile material that is determined by dividing the number 50 by the smaller of the numbers determined using the rules in section 10.6.2.4.3 of the DG Regulation Guide"
},
        "IDG_ADD_DESC_INFO": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Hazmat IDG additional description information"
},
        "MAX_QUANTITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum passenger volume or the Maximum cargo volume for the item (Used in Q- Value calculation)"
},
        "OUTER_PACKAGING_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Outer packaging type if packing type = All packed in one"
},
        "OUTER_PACKING_COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Outer Packing count"
},
        "IS_OVERPACK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Flag to indicate the pkg is an 'overpack'"
},
        "PACKAGE_TYPE": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Hazmat Package type of the Dangerous Goods shipment."
},
        "PACKING_COUNT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Packing Count (number of packaged units)"
},
        "PACKING_INSTRUCTIONS": {
          "type": "VARCHAR2(4)",
          "nullable": true,
          "info": "Required for dangerous goods shipments, unless the DG class is radioactive or Not Restricted.See Table 4.2 columns G, I, or K of the IATA DG Regulations."
},
        "PHYSICAL_FORM": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "P",
                    "S",
                    "L",
                    "G"
          ],
          "info": "A description of the physical form of the radioactive substance :                                                                                                              S(p)ecial (S)olid (L)iquid (G)as"
},
        "Q_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Ratio used to indicate that the combined quantities in 'all packed in one' package are within the maximum allowable limits."
},
        "HAZ_QUANTITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Hazmat item quantity"
},
        "RADIOACTIVE_LABEL": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "1",
                    "2",
                    "3"
          ],
          "info": "The type of label on the shipment.     W1 (White I) Y2 (Yellow II) Y3 (Yellow III)"
},
        "RAD_PACKAGING": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "1",
                    "2",
                    "3",
                    "A",
                    "B",
                    "U",
                    "C"
          ],
          "info": "A description of the type of packaging the substance is contained in.  Acceptable package types are listed in section 10.5 of the DG Regulations Guide:             Expected  ( Expected ) Industrial ip1  ( Industrial Type 1(IP-1) ) Industrial ip2  ( Industrial Type 2(IP-2) ) Industrial ip3  ( Industrial Type 3(IP-3) ) Type a   ( Type A  )    Type b(m)  ( Type B(M) ) Type b(u)  ( Type B(U) )  Type c   ( Type C )"
},
        "RADIOACTIVITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A measurement of the activity of the shipment. For fissile material, the weight of the material in grams or kilograms may be substituted for the activity measurement"
},
        "RADIOACTIVITY_UNITS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "B",
                    "K",
                    "M",
                    "G",
                    "T",
                    "P"
          ],
          "info": "The units that the activity were mesaured in.  This must be in becquerel units (or multiples thereof) :                                                               Bq (becquerel) kBq (kilobecquerel) MBq (megabecquerel) GBq (gigabecquerel) TBq (terabecquerel) PBq (petabecquerel)"
},
        "RADIONUCLIDE": {
          "type": "VARCHAR2(35)",
          "nullable": true,
          "info": "The radionuclide assigned to the substance being shipped.  A table of basic radionuclides is available in the DG Regulation Guide section 10.4.A.  For example, Aluminium (13) has a radionuclide Al-26"
},
        "SUBSTANCE_NUMBER": {
          "type": "VARCHAR2(7)",
          "nullable": true,
          "info": "Hazardous Materials substance number."
},
        "SURFACE_READING": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The surface reading of the radiation exposure for the package.  This reading must be measured in mrem/h"
},
        "TRANSPORT_INDEX": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A number based on the radiation exposure of a package. This is determined based on the maximum measurement of the radiation in mrem/h at a distance of 1 meter from the package surface"
},
        "MATERIALS_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "l",
                    "e",
                    "f"
          ],
          "info": "Hazardous Materials Type.  Valid values are: l = Limited Quantities e = 500 KG Exemption f = Fully Regulated (Purolater)"
},
        "UNITS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "L",
                    "G",
                    "K",
                    "R"
          ],
          "info": "IATA units for Non UPS shipments (L=>Liters g=>Grams kg=>Kilograms kg G=>Kilograms Gross)."
},
        "EXTERNAL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Item Hazmat code as configured in the TNT EM. (For carrier TNT)"
},
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Store a user-defined icon that will apear within the user interface to help visually identify attributes for the item"
},
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Store a user-defined icon that will apear within the user interface to help visually identify attributes for the item"
},
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Store a user-defined icon that will apear within the user interface to help visually identify attributes for the item"
}
      },
      "fk_tables": [
        "HAZMAT_EDE_MAPPING",
        "ORDER_RELEASE_LINE",
        "S_SHIP_UNIT_LINE"
]
    }
  }
};