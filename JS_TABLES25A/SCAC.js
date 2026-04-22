// SCAC.js

window.SCAC = {
  "tables": {
    "SCAC": {
      "columns": {
        "SCAC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique 2 to 4 letter Standard Carrier Alpha Code. "
        },
        "SCAC_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The 2 to 4 letter Standard Carrier Alpha Code. "
        },
        "COMPANY_NAME": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The Company Name of the Standard Carrier Alpha Code. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The Description of the Standard Carrier Alpha Code."
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
        "ASSET_LEASE",
        "DM_RULE",
        "EQUIPMENT",
        "ORDER_RELEASE",
        "ROUTE_CODE_D",
        "SERVPROV",
        "TRACKING_LOCATION_RT",
        "TRACKING_LOCATION_RT_D"
      ]
    }
  }
};
