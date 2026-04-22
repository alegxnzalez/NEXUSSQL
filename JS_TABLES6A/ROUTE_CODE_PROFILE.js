// ROUTE_CODE_PROFILE.js

window.ROUTE_CODE_PROFILE = {
  "tables": {
    "ROUTE_CODE_PROFILE": {
      "columns": {
        "ROUTE_CODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "ROUTE_CODE_PROFILE_GID is the unique identifier for the route code profile. "
        },
        "ROUTE_CODE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "ROUTE_CODE_PROFILE_XID is the unique external identifier for the route code profile. "
        },
        "ROUTE_CODE_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "ROUTE_CODE_PROFILE_NAME is text for the name of the route code profile "
        },
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A true or false indicator that identifies whether the route codes are compatible."
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
        "ROUTE_CODE_PROFILE_D",
        "SECONDARY_CHARGE_RULE"
      ]
    }
  }
};
