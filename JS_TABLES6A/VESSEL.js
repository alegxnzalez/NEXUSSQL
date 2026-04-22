// VESSEL.js

window.VESSEL = {
  "tables": {
    "VESSEL": {
      "columns": {
        "VESSEL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Vessel Id "
        },
        "VESSEL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "VESSEL_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "info": "User specified name for the vessel; typically used if different from the GID "
        },
        "OWNER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Vessel owner "
        },
        "OPERATOR": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "vessel operator "
        },
        "REGISTRY_PORT_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "vessel port of registry "
        },
        "FLAG_COUNTRY_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "vessel country "
        },
        "OFFICIAL_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "official number for vessel "
        },
        "CALL_SIGN": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "vessel call sign "
        },
        "IMO_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "7 digit number assigned to all ships "
        },
        "CLASS_SOCIETY_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "class society number for vessel "
        },
        "YEAR_BUILT": {
          "type": "VARCHAR2(4)",
          "nullable": true,
          "info": "year vessel was built "
        },
        "IS_IN_SERVICE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Must be Y/N to indicate if vessel is in service."
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
        "CHARTER_VOYAGE",
        "IE_SHIPMENTSTATUS",
        "INVOICE",
        "SHIPMENT",
        "VESSEL_REFNUM",
        "VOYAGE"
      ]
    }
  }
};
