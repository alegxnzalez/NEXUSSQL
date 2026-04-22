// ROUTE_CODE_PROFILE_D.js

window.ROUTE_CODE_PROFILE_D = {
  "tables": {
    "ROUTE_CODE_PROFILE_D": {
      "columns": {
        "ROUTE_CODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTE_CODE_PROFILE",
          "info": "ROUTE_CODE_PROFILE_GID contains the unique identifier for the route code profile which provides the details about the profile. "
        },
        "ROUTE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTE_CODE",
          "info": "ROUTE_CODE_GID contains the unique identifier for the route code which provides the details about the route code."
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
      "fk_tables": []
    }
  }
};
