// HAZMAT_GENERIC.js

window.HAZMAT_GENERIC = {
  "tables": {
    "HAZMAT_GENERIC": {
      "columns": {
        "HAZMAT_GENERIC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "HAZMAT_GENERIC_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "PROPER_SHIPPING_NAME": {
          "type": "VARCHAR2(150)",
          "nullable": false,
          "info": "THE PROPER SHIPPING NAME USED FOR AN ITEM. "
        },
        "IDENTIFICATION_NUMBER": {
          "type": "VARCHAR2(25)",
          "nullable": false,
          "info": "HAZARDOUS CARGO CLASSIFICATION NUMBER. "
        },
        "PACKAGING_GROUP": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "values": [
            "I",
            "II",
            "III",
            "NA"
          ],
          "info": "THE PACKAGE GROUP. "
        },
        "SUBSIDIARY_HAZARD": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "SIMILAR TO HAZARD_CLASS. "
        },
        "REGULATORY_AGENCY_DATA_SOURCE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SPECIAL_PROVISIONS": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "PSA_SINGAPORE_GROUP": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SYMBOL_EXTRA_MEANING": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "IMDG_EMS_NUMBER": {
          "type": "VARCHAR2(25)",
          "nullable": true,
          "info": "INTERNATIONAL MARITIME DANGEROUS GOODS EMERGENCY RESPONSE NUMBER."
        },
        "HAZARDOUS_CLASSIFICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZARDOUS_CLASSIFICATION"
        },
        "IS_NOS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_MARINE_POLLUTANT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
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
        "ERG": {
          "type": "VARCHAR2(25)",
          "nullable": true
        },
        "ERG_AIR": {
          "type": "VARCHAR2(25)",
          "nullable": true
        },
        "EMS": {
          "type": "VARCHAR2(25)",
          "nullable": true
        },
        "COMPATIBILITY_GROUP": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "J",
            "K",
            "L",
            "N",
            "S"
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
        }
      },
      "fk_tables": [
        "HAZMAT_ITEM",
        "ORDER_RELEASE_LINE"
      ]
    }
  }
};
