// I_TRANSMISSION_ACK.js

window.I_TRANSMISSION_ACK = {
  "tables": {
    "I_TRANSMISSION_ACK": {
      "columns": {
        "I_TRANSMISSION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The Transmission number referring to the Transmission for the Ack. "
        },
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number to uniquely identify the Transmission Ack for the Transmission. "
        },
        "ACK_STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Specifies the status provided within the Transmission Ack. "
        },
        "ACK_REASON": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Specifies the reason for the status provided within the Transmission Ack. "
        },
        "REF_TRANSMISSION_ID": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Represents a Transmission ID assigned for the Transmission from the external system. "
        },
        "REF_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Represents the Transaction record containing the xml for this Transmission Ack. "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Populated through a trigger, this key is used to determine into which partition this record should be inserted. The formula is based upon the insert_date column and the frequency in which this table is associated (weekly, monthly, quarterly). Valid values are 1-4."
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
