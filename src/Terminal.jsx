import { useState, useEffect, useRef } from 'react'

const BANNER = `   ███████  ██████  ██      ██  ██████ ███████
   ██      ██    ██ ██      ██ ██      ██
   ███████ ██    ██ ██      ██ ██      █████
        ██ ██    ██ ██      ██ ██      ██
   ███████  ██████  ███████ ██  ██████ ███████

Type 'help' for available commands`

const aboutText = `Hi, I'm Solice.
A developer passionate about building things.

GitHub: https://github.com/Soliceee`

const helpText = `Available commands:
  about    - About me
  banner   - Display banner
  whoami   - Who you are
  date     - Current date and time
  help     - Show this help
  clear    - Clear terminal`

function Terminal() {
  const [lines, setLines] = useState([
    { text: BANNER, type: 'output' },
    { text: '', type: 'output' },
    { text: 'Welcome! Type help to see available commands.', type: 'output' },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function processCommand(cmd) {
    const trimmed = cmd.trim().toLowerCase()
    const newLines = [...lines, { text: `$ ${cmd}`, type: 'input' }]

    setHistory((prev) => [...prev, cmd])
    setHistoryIndex(-1)

    switch (trimmed) {
      case 'banner':
        newLines.push({ text: BANNER, type: 'output' })
        break
      case 'about':
        newLines.push({ text: aboutText, type: 'output' })
        break
      case 'whoami':
        newLines.push({ text: 'visitor', type: 'output' })
        break
      case 'date':
        newLines.push({ text: new Date().toString(), type: 'output' })
        break
      case 'help':
        newLines.push({ text: helpText, type: 'output' })
        break
      case 'clear':
        setLines([])
        return
      case '':
        break
      default:
        newLines.push({ text: `Command not found: ${cmd}`, type: 'error' })
    }

    setLines(newLines)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim()) return
    processCommand(input.trim())
    setInput('')
  }

  function handleKeyDown(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length === 0) return
      const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(newIndex)
      setInput(history[newIndex])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex === -1) return
      const newIndex = historyIndex + 1
      if (newIndex >= history.length) {
        setHistoryIndex(-1)
        setInput('')
      } else {
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      }
    }
  }

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-header">
        <span className="terminal-dot red" />
        <span className="terminal-dot yellow" />
        <span className="terminal-dot green" />
        <span className="terminal-title">Solice@terminal</span>
      </div>
      <div className="terminal-body">
        {lines.map((line, i) => (
          <div key={i} className={`terminal-line ${line.type}`}>
            {line.text}
          </div>
        ))}
        <form className="terminal-prompt" onSubmit={handleSubmit}>
          <span className="prompt-symbol">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="prompt-input"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </form>
        <div ref={endRef} />
      </div>
    </div>
  )
}

export default Terminal
