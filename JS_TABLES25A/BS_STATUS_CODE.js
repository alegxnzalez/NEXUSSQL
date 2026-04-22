// BS_STATUS_CODE.js

window.BS_STATUS_CODE = {
  "tables": {
    "BS_STATUS_CODE": {
      "columns": {
        "BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "BS_STATUS_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(100)",
          "nullable": false
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
        "CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "This field represents status code."
        }
      },
      "fk_tables": [
        "AGENT_ACTION_DETAILS",
        "AUDIT_TRAIL",
        "BS_EVENT_GROUP_CLASSIFY",
        "BS_QUICK_CODE",
        "BS_STATUS_CODE_PROFILE_D",
        "DM_RULE_D",
        "DM_TRANSACTION",
        "DM_TRANSACTION_EVENT",
        "EQUIPMENT",
        "GTM_DECL_MESSAGE",
        "GTM_TRANSACTION",
        "IE_SHIPMENTSTATUS",
        "MONITOR_AGENT",
        "MONITOR_AGENT_EVENT",
        "OBS_STATUS_HISTORY",
        "ORDER_RELEASE_STATUS_HISTORY",
        "QUICK_EVENT",
        "SHIPMENT",
        "SKU_EVENT"
      ]
    }
  }
};
