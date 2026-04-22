// GTM_DT_CONFIG_RULE.js

window.GTM_DT_CONFIG_RULE = {
  "tables": {
    "GTM_DT_CONFIG_RULE": {
      "columns": {
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
        "GTM_DT_CONFIG_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Uniquely identifies a data configuration rule "
        },
        "GTM_DT_CONFIG_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Uniquely identifies a data configuration rule in a domain. "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Takes the values Y/N "
        },
        "RULE_PRIORITY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Decides the priority of the rule. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of the data configuration rule "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Rule is active from effective date. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Rule is active till expiration date. "
        },
        "SHIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT_TYPE",
          "info": "Identifies the type of the shipment ? Consol Shipment, Secondary Charge Shipment etc., "
        },
        "IS_PRIMARY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Identifies the primary shipment among the multiple shipments. Takes the values Y/N. "
        },
        "SHIPMENT_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT_REFNUM_QUAL",
          "info": "Gives the Shipment Refnum Qualifier. "
        },
        "SHIPMENT_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "Holds the Shipment Refnum Value which ise matched against a shipment?s refnum qualifier. "
        },
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_QUERY",
          "info": "Identifies a particular shipment based on the condition given the query. "
        },
        "GTM_DT_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_DT_CONFIG",
          "info": "Applies this data configuration to a shipment  in order to create or update a trade transaction. "
        },
        "TRANSPORT_MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "Gives the Transport Mode Profile ID"
        }
      },
      "fk_tables": []
    }
  }
};
