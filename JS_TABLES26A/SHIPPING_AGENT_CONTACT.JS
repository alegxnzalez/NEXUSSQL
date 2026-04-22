// SHIPPING_AGENT_CONTACT.js

window.SHIPPING_AGENT_CONTACT = {
  "tables": {
    "SHIPPING_AGENT_CONTACT": {
      "description": "Used to define the agent contacts for a given agent.",
      "columns": {
        "SHIPPING_AGENT_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Internal Id of the shipping agent contact"
},
        "SHIPPING_AGENT_CONTACT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External Id of the shipping agent contact"
},
        "SHIPPING_AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIPPING_AGENT",
          "info": "Id of the related shipping agent"
},
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "The role of the agent"
},
        "INVOLVED_PARTY_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CONTACT",
          "info": "The primary contact id of the agent"
},
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "COM_METHOD",
          "info": "The preferred communication method of the agent"
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicator of whether or not the agent is active"
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date the agent becomes effective"
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date the agent expires"
},
        "PRIMARY_LEG_MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "Mode profile to be compared to transport mode of primary leg sell/buy shipment depending on agent type"
},
        "DEST_LOC_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "Location profile to be compared with dest location of primary leg sell/buy shipment depending on agent type"
},
        "SHIPPER_LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "Location profile to be compared with location related to 'SHIPPER' involved party on the order"
},
        "CONSIGNEE_LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "Location profile to be compared with location related to 'CONSIGNEE' involved party on the order"
},
        "IS_PRIMARY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicator of whether or not the agent is considered the primary in the corresponding geography"
},
        "IS_ALLOW_HOUSE_COLLECT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicator of whether or not the house bill is allowed to have a 'COLLECT' payment method"
},
        "MAX_HOUSE_COLLECT_AMT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum amount of freight charges on the house bill that can be 'COLLECT'"
},
        "MAX_HOUSE_COLLECT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "MAX_HOUSE_COLLECT_AMT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAST_BL_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
                    "EXPRESS",
                    "ORIGINAL"
          ],
          "info": "Type of Master B/L ('Express', or 'Original')"
},
        "MAST_BL_CONSIGNEE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
                    "CONSOL AGENT",
                    "HOUSE B/L CONSIGNEE",
                    "HOUSE B/L NOTIFY PARTY"
          ],
          "info": "Determines who to make the Master B/L Consignee party ('Consol Agent', 'House B/L Consignee', House B/L Notify Party')"
},
        "MAST_BL_CONS_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "Contact Id of the Master B/L Consignee if assigned by the 'Consol Agent'."
},
        "MAST_BL_CONS_COM_METH_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "Communication Method of the Master B/L Consignee."
},
        "MAST_BL_NOTIFY_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
                    "CONSOL AGENT",
                    "HOUSE B/L CONSIGNEE",
                    "HOUSE B/L NOTIFY PARTY"
          ],
          "info": "Determines who to make the Master B/L Notify party ('Consol Agent', 'House B/L Consignee', 'House B/L Notify Party')"
},
        "MAST_BL_NOTIFY_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "Contact Id of the Master B/L Notify if assigned by the 'Consol Agent'."
},
        "MAST_BL_NOTIFY_COM_METH_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "Communication Method of the Master B/L Notify."
},
        "MAST_BL_A_NOTIFY_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
                    "CONSOL AGENT",
                    "HOUSE B/L CONSIGNEE",
                    "HOUSE B/L NOTIFY PARTY"
          ],
          "info": "Determines who to make the Master B/L Also Notify party ('Consol Agent', 'House B/L Consignee', 'House B/L Notify Party')"
},
        "MAST_BL_A_NOTIFY_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "Contact Id of the Master B/L Also Notify if assigned by the 'Consol Agent'."
},
        "MAST_BL_A_NOTIFY_COM_METH_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "Communication Method of the Master B/L Also Notify."
},
        "IS_INTERNAL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicator of whether or not the 'Sales Agent' is an internal or external sales agent"
},
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE"
},
        "NFRC_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "NFRC_RULE",
          "info": "This field will be used to create NFRC shipment when run assign shipping agent to job action."
},
        "SHIPPING_AGENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPPING_AGENT_TYPE",
          "info": "Indicates which shipping agent type this agent is."
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
        "GL_USER_SHP_AGNT_CONTACT_JOIN",
        "JOB_INVOLVED_PARTY",
        "SHIPMENT",
        "SHIPMENT_AGENT_RSP",
        "SHIPPING_AGENT_CONTACT_NOTE",
        "SHIPPING_AGENT_CONTACT_PROFIT",
        "SHIPPING_AGENT_CONTACT_TEXT"
]
    }
  }
};