// SHIPPING_AGENT_CONTACT_PROFIT.js

window.SHIPPING_AGENT_CONTACT_PROFIT = {
  "tables": {
    "SHIPPING_AGENT_CONTACT_PROFIT": {
      "columns": {
        "SHIPPING_AGENT_CONT_PROFIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "System Generated Unique Id "
        },
        "SHIPPING_AGENT_CONT_PROFIT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "System Generated Unique Id "
        },
        "SHIPPING_AGENT_CONT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIPPING_AGENT_CONTACT",
          "info": "Id of the related shipping agent role "
        },
        "PRIMARY_LEG_MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "Mode profile to be compared with the primary leg sell shipment transport mode "
        },
        "JOB_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Field to be compared with the type of job "
        },
        "SHIPPER_LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "Location profile to be compared located associated with 'SHIPPER' involved party on the order "
        },
        "CONSIGNEE_LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "Location profile to be compared located associated with 'CONSIGNEE' involved party on the order "
        },
        "PROFIT_SPLIT_PERCENTAGE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Percentage of profit split "
        },
        "PROFIT_SPLIT_AMT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Flat profit split amount for when agent is not eligible for percentage. "
        },
        "PROFIT_SPLIT_AMT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "PROFIT_SPLIT_AMT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CONSOL_TYPE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSOLIDATION_TYPE_PROF",
          "info": "This field will be used as one of the parameters to evaluate the profit split."
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
