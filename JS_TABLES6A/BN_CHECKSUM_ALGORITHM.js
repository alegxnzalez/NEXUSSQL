// BN_CHECKSUM_ALGORITHM.js

window.BN_CHECKSUM_ALGORITHM = {
  "tables": {
    "BN_CHECKSUM_ALGORITHM": {
      "columns": {
        "BN_CHECKSUM_ALGORITHM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique identifier of the algorithm. "
        },
        "BN_CHECKSUM_ALGORITHM_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External identifier of the algorithm. "
        },
        "ALGORITHM_SUMMARY": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "A summary of the algorithm. "
        },
        "ALGORITHM_DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "A detailed description of the algorithm. "
        },
        "ALGORITHM_CLASS": {
          "type": "VARCHAR2(500)",
          "nullable": false,
          "info": "Name of the java class implementing the algorithm. "
        },
        "ALGORITHM_CLASS_PARAMETERS": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Free format parameters to the java class."
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": []
    }
  }
};
