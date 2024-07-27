import { InstructionMips, TRegisters } from '../types/mipsTypes';

export const instructions: { [key: string]: InstructionMips } = {
    lb: {
        mnemonic: "lb",
        format: "I",
        encoding: null
    },
    lh: {
        mnemonic: "lh",
        format: "I",
        encoding: null
    },
    lwl: {
        mnemonic: "lwl",
        format: "I",
        encoding: null
    },
    lw: {
        mnemonic: "lw",
        format: "I",
        encoding: null
    },
    lbu: {
        mnemonic: "lbu",
        format: "I",
        encoding: null
    },
    lhu: {
        mnemonic: "lhu",
        format: "I",
        encoding: null
    },
    lwr: {
        mnemonic: "lwr",
        format: "I",
        encoding: null
    },
    sb: {
        mnemonic: "sb",
        format: "I",
        encoding: null
    },
    sh: {
        mnemonic: "sh",
        format: "I",
        encoding: null
    },
    swl: {
        mnemonic: "swl",
        format: "I",
        encoding: null
    },
    sw: {
        mnemonic: "sw",
        format: "I",
        encoding: null
    },
    swr: {
        mnemonic: "swr",
        format: "I",
        encoding: null
    },
    add: {
        mnemonic: "add",
        format: "R",
        encoding: null
    },
    addu: {
        mnemonic: "addu",
        format: "R",
        encoding: null
    },
    sub: {
        mnemonic: "sub",
        format: "R",
        encoding: null
    },
    subu: {
        mnemonic: "subu",
        format: "R",
        encoding: null
    },
    and: {
        mnemonic: "and",
        format: "R",
        encoding: null
    },
    or: {
        mnemonic: "or",
        format: "R",
        encoding: null
    },
    xor: {
        mnemonic: "xor",
        format: "R",
        encoding: null
    },
    nor: {
        mnemonic: "nor",
        format: "R",
        encoding: null
    },
    slt: {
        mnemonic: "slt",
        format: "R",
        encoding: null
    },
    sltu: {
        mnemonic: "sltu",
        format: "R",
        encoding: null
    },
    addi: {
        mnemonic: "addi",
        format: "I",
        encoding: null
    },
    addiu: {
        mnemonic: "addiu",
        format: "I",
        encoding: null
    },
    slti: {
        mnemonic: "slti",
        format: "I",
        encoding: null
    },
    sltiu: {
        mnemonic: "sltiu",
        format: "I",
        encoding: null
    },
    andi: {
        mnemonic: "andi",
        format: "I",
        encoding: null
    },
    ori: {
        mnemonic: "ori",
        format: "I",
        encoding: null
    },
    xori: {
        mnemonic: "xori",
        format: "I",
        encoding: null
    },
    lui: {
        mnemonic: "lui",
        format: "I",
        encoding: null
    },
    sll: {
        mnemonic: "sll",
        format: "R",
        encoding: null
    },
    srl: {
        mnemonic: "srl",
        format: "R",
        encoding: null
    },
    sra: {
        mnemonic: "sra",
        format: "R",
        encoding: null
    },
    sllv: {
        mnemonic: "sllv",
        format: "R",
        encoding: null
    },
    srlv: {
        mnemonic: "srlv",
        format: "R",
        encoding: null
    },
    srav: {
        mnemonic: "srav",
        format: "R",
        encoding: null
    },
    mfhi: {
        mnemonic: "mfhi",
        format: "R",
        encoding: null
    },
    mthi: {
        mnemonic: "mthi",
        format: "R",
        encoding: null
    },
    mflo: {
        mnemonic: "mflo",
        format: "R",
        encoding: null
    },
    mtlo: {
        mnemonic: "mtlo",
        format: "R",
        encoding: null
    },
    mult: {
        mnemonic: "mult",
        format: "R",
        encoding: null
    },
    multu: {
        mnemonic: "multu",
        format: "R",
        encoding: null
    },
    div: {
        mnemonic: "div",
        format: "R",
        encoding: null
    },
    divu: {
        mnemonic: "divu",
        format: "R",
        encoding: null
    },
    jr: {
        mnemonic: "jr",
        format: "R",
        encoding: null
    },
    jalr: {
        mnemonic: "jalr",
        format: "R",
        encoding: null
    },
    bltz: {
        mnemonic: "bltz",
        format: "I",
        encoding: null
    },
    bgez: {
        mnemonic: "bgez",
        format: "I",
        encoding: null
    },
    bltzal: {
        mnemonic: "bltzal",
        format: "I",
        encoding: null
    },
    bgezal: {
        mnemonic: "bgezal",
        format: "I",
        encoding: null
    },
    j: {
        mnemonic: "j",
        format: "J",
        encoding: null
    },
    jal: {
        mnemonic: "jal",
        format: "R",
        encoding: null
    },
    beq: {
        mnemonic: "beq",
        format: "I",
        encoding: null
    },
    bne: {
        mnemonic: "bne",
        format: "I",
        encoding: null
    },
    blez: {
        mnemonic: "blez",
        format: "I",
        encoding: null
    },
    bgtz: {
        mnemonic: "bgtz",
        format: "I",
        encoding: null
    }
};

export const registers: TRegisters = {
    $zero: "00000",
    $at: "00001",
    $v0: "00010",
    $v1: "00011",
    $a0: "00100",
    $a1: "00101",
    $a2: "00110",
    $a3: "00111",
    $t0: "01000",
    $t1: "01009",
    $t2: "01010",
    $t3: "01011",
    $t4: "01100",
    $t5: "01101",
    $t6: "01110",
    $t7: "01111",
    $s0: "10000",
    $s1: "10001",
    $s2: "10010",
    $s3: "10011",
    $s4: "10100",
    $s5: "10101",
    $s6: "10110",
    $s7: "10111",
    $t8: "11000",
    $t9: "11001",
    $k0: "11010",
    $k1: "11011",
    $gp: "11100",
    $sp: "11101",
    $s8: "11110",
    $ra: "11111"
}